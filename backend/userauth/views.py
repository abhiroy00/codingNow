from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from .emails import *
from .models import *
from .serializer import *
from django.conf import settings
from django.utils import timezone

from urllib.parse import urljoin

import requests
from django.urls import reverse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.conf import settings
from django.shortcuts import render
from django.views import View


def handle_error(e):
    return Response({
        'status': 500,
        'message': 'Internal server error',
        'data': str(e),
    }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    
@api_view(['POST'])
def register(request):
    try:
        data = request.data
        serializer = RegisterSerializer(data=data)
        if serializer.is_valid():
            user = serializer.save()
            send_otp_via_mail(user.email)  # Send OTP to the user's email
            return Response({
                "status": 200,
                "message": "Registered successfully. Check your email for OTP verification.",
                "data": serializer.data,
            })
        return Response({
            'status': 400,
            'message': 'Invalid data',
            'data': serializer.errors,
        })
    except Exception as e:
        return handle_error(e)

@api_view(['POST'])
def verify_otp(request):
    try:
        data = request.data
        serializer = VerifyAccountSerializer(data=data)

        if serializer.is_valid():
            email = serializer.validated_data['email']
            otp = serializer.validated_data['otp']
            
            # Get the user and their profile
            user = User.objects.filter(email=email).first()
            if not user:
                return Response({'status': 400, 'message': 'User not found'})

            profile = user.profile  # Access the related Profile model

            # Check OTP
            if profile.otp != otp:
                return Response({'status': 400, 'message': 'Invalid OTP'})

            # Check expiration from User model
            if user.otp_expiration and timezone.now() > user.otp_expiration:
                return Response({'status': 400, 'message': 'OTP expired'})

            # Mark email as verified and clear OTP
            user.email_verified = True
            user.otp_expiration = None
            profile.otp = None
            profile.otp_verified = True

            user.save()
            profile.save()

            return Response({'status': 200, 'message': 'OTP verified successfully'})

        return Response({'status': 400, 'message': 'Invalid data', 'data': serializer.errors})
    
    except Exception as e:
        return handle_error(e)



@api_view(['POST'])
def forgot_password(request):
    try:
        email = request.data.get('email')
        if not email:
            return Response({'status': 400, 'message': 'Email is required'})

        user = User.objects.filter(email=email).first()
        if not user:
            return Response({'status': 400, 'message': 'User not found'})

        send_otp_via_mail(user.email)  # Send OTP for password reset
        return Response({'status': 200, 'message': 'OTP sent to your email'})
    except Exception as e:
        return handle_error(e)


@api_view(['POST'])
def reset_password(request):
    try:
        data = request.data
        serializer = ResetPasswordSerializer(data=data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            otp = serializer.validated_data['otp']
            new_password = serializer.validated_data['new_password']

            user = User.objects.filter(email=email).first()
            if not user:
                return Response({'status': 400, 'message': 'User not found'})

            if user.profile.otp != otp:
                return Response({'status': 400, 'message': 'Invalid OTP'})

            if user.otp_expiration and timezone.now() > user.otp_expiration:
                return Response({'status': 400, 'message': 'OTP expired'})

            user.set_password(new_password)
            user.otp = None
            user.save()
            return Response({'status': 200, 'message': 'Password reset successfully'})
        return Response({'status': 400, 'message': 'Invalid data', 'data': serializer.errors})
    except Exception as e:
        return handle_error(e)


@api_view(['POST'])
def login(request):
    try:
        email = request.data.get('email')

        if not email:
            return Response({'status': 400, 'message': 'Email is required'})

        user = User.objects.filter(email=email).first()
        if not user:
            return Response({'status': 400, 'message': 'User not found'})

        # Send OTP to the user's email
        send_otp_via_mail(user.email)
        return Response({'status': 200, 'message': 'OTP sent to your email'})
    except Exception as e:
        return handle_error(e)

@api_view(['POST'])
def verify_login(request):
    try:
        email = request.data.get('email')
        otp = request.data.get('otp')

        if not email or not otp:
            return Response({'status': 400, 'message': 'Email and OTP are required'})

        user = User.objects.filter(email=email).first()
        if not user:
            return Response({'status': 400, 'message': 'User not found'})

        profile = user.profile  # Access the related Profile model

        # Check OTP
        if profile.otp != otp:
            return Response({'status': 400, 'message': 'Invalid OTP'})

        # Check OTP expiration
        if user.otp_expiration and timezone.now() > user.otp_expiration:
            return Response({'status': 400, 'message': 'OTP expired'})

        # Clear OTP after successful verification
        user.email_verified = True
        user.otp_expiration = None
        profile.otp = None
        profile.otp_verified = True
        user.save()
        profile.save()

        # Generate JWT token
        refresh = RefreshToken.for_user(user)
        return Response({
            'status': 200,
            'message': 'Login verified successfully',
            'access_token': str(refresh.access_token),
            'refresh_token': str(refresh),
        })
    except Exception as e:
        return handle_error(e)

@api_view(['POST'])
def forgot_email(request):
    try:
        data = request.data
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return Response({
                'status': 400,
                'message': 'Email and password are required',
                'data': {'email': email, 'password': password},
            })

        user = authenticate(email=email, password=password)
        if not user:
            return Response({
                'status': 400,
                'message': 'Invalid email or password',
                'data': {'email': email},
            })

        send_forget_email_otp_via_mail(user.email)
        return Response({
            'status': 200,
            'message': 'OTP sent to your email for password reset',
        })
    except Exception as e:
        return handle_error(e)


@api_view(['POST'])
def reset_email(request):
    try:
        serializer = ResetEmailSerializer(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data['email']
            new_email = serializer.validated_data['new_email']
            otp = serializer.validated_data['otp']

            user = User.objects.filter(email=email).first()
            if not user:
                return Response({
                    'status': 400,
                    'message': 'User with this email does not exist.',
                })

            if str(user.otp) != str(otp):
                return Response({
                    'status': 400,
                    'message': 'Invalid OTP.',
                })

            if user.otp_expiration and timezone.now() > user.otp_expiration:
                return Response({
                    'status': 400,
                    'message': 'OTP expired',
                    'data': 'The OTP provided has expired. Please request a new one.',
                })

            user.email = new_email
            user.otp = None
            user.save()

            return Response({
                'status': 200,
                'message': 'Email updated successfully.',
            })

        return Response({
            'status': 400,
            'message': 'Validation failed.',
            'errors': serializer.errors
        })

    except Exception as e:
        return handle_error(e)


@api_view(['POST'])
def resend_otp(request):
    try:
        email = request.data.get('email')
        if not email:
            return Response({'status': 400, 'message': 'Email is required'})

        user = User.objects.filter(email=email).first()
        if not user:
            return Response({'status': 400, 'message': 'User not found'})

        send_otp_via_mail(user.email)  # Resend OTP
        return Response({'status': 200, 'message': 'OTP resent successfully'})
    except Exception as e:
        return handle_error(e)

    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):
    try:
        refresh_token = request.data.get('refresh_token')
        if not refresh_token:
            return Response({'status': 400, 'message': 'Refresh token is required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        token = RefreshToken(refresh_token)
        token.blacklist()

        return Response({'status': 200, 'message': 'Logout successful.'}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'status': 500, 'message': 'Internal server error', 'data': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)