from django.core.mail import send_mail
import random
from django.conf import settings
from .models import User
from django.utils.timezone import now
from django.utils import timezone
from datetime import timedelta

otp_expiration_time = settings.OTP_EXPIRATION_TIME_MINUTES

def generate_otp(length=5):
        # Generate a random 5-digit OTP
        otp = ''.join([str(random.randint(0, 9)) for _ in range(length)])
        return otp

def send_otp(email, subject, purpose="verification", otp=None):
    try:
        # Generate OTP if not provided
        if otp is None:
            otp = generate_otp()

        otp_expiration = timezone.now() + timedelta(minutes=otp_expiration_time)

        # Define the simplified HTML message template
        if purpose == "verification":
            message = f"Your OTP for {purpose.replace('_', ' ')} is {otp}."
            html_message = f"""
            <html>
            <body>
                <p>Dear {email},</p>
                <p>Your OTP for email verification is: <strong>{otp}</strong></p>
                <p>If you did not request this, please ignore this email.</p>
                <p>Thank you!</p>
            </body>
            </html>
            """
        elif purpose == "reset_password":
            message = f"Your OTP for {purpose.replace('_', ' ')} is {otp}."
            html_message = f"""
            <html>
            <body>
                <p>Dear {email},</p>
                <p>Your OTP for resetting your password is: <strong>{otp}</strong></p>
                <p>If you did not request this, please ignore this email.</p>
                <p>Thank you!</p>
            </body>
            </html>
            """
        elif purpose == "reset_mail":
            message = f"Your OTP for {purpose.replace('_', ' ')} is {otp}."
            html_message = f"""
            <html>
            <body>
                <p>Dear {email},</p>
                <p>Your OTP for resetting your email is: <strong>{otp}</strong></p>
                <p>If you did not request this, please ignore this email.</p>
                <p>Thank you!</p>
            </body>
            </html>
            """
        elif purpose == "mail_verified":
            message = f"Hi {email},\n\nYour email has been successfully verified. Your account is now active. You can now log in to your account."
            html_message = f"""
            <html>
            <body>
                <p>Dear {email},</p>
                <p>Your email has been successfully verified. Your account is now active.</p>
                <p>You can now log in to your account.</p>
                <p>Thank you!</p>
            </body>
            </html>
            """
        else:
            raise ValueError("Invalid purpose provided.")

        # Define the sender email
        email_from = settings.EMAIL_FROM

        try:
            send_mail(
                subject, 
                message, 
                email_from, 
                [email],
                html_message=html_message,
            )
        except Exception as e:
            print(f"Failed to send HTML message to {email}: {str(e)}")
            # If HTML message fails, send the plain text message instead
            send_mail(
                subject, 
                message, 
                email_from, 
                [email],
                html_message=None  # No HTML content in the fallback
            )
        
        # Save the OTP to the user's model
        user_obj = User.objects.get(email=email)
        profile = user_obj.profile
        profile.otp = otp
        user_obj.otp_expiration = otp_expiration
        profile.save()
        user_obj.save()


    except User.DoesNotExist:
        print(f"User with email {email} does not exist.")
    
    except Exception as e:
        print(f"Failed to send OTP to {email}: {str(e)}")


def send_otp_via_mail(email, otp=None):
    """
    Sends an OTP for email verification with HTML content.
    """
    subject = f"{settings.ORG_NAME} Sends an OTP for Email Verification"
    send_otp(email, subject, purpose="verification", otp=otp)


def send_forget_pass_otp_via_mail(email, otp=None):
    """
    Sends an OTP for resetting the password with HTML content.
    """
    subject = f"{settings.ORG_NAME} Sends an OTP for Resetting the Password"
    send_otp(email, subject, purpose="reset_password", otp=otp)


def send_forget_email_otp_via_mail(email, otp=None):
    """
    Sends an OTP for resetting email with HTML content.
    """
    subject = f"{settings.ORG_NAME} Sends an OTP for Resetting Your Email"
    send_otp(email, subject, purpose="reset_mail", otp=otp)

def send_account_verified_email(email):
    """
    Sends an email to the user after the account is verified.
    """
    subject = f"{settings.ORG_NAME} Account Verified"
    send_otp(email, subject, purpose="mail_verified")

def verify_otp(email, otp):
    try:
        user_obj = User.objects.get(email=email)
        if user_obj.otp == otp:
            if timezone.now() < user_obj.otp_expiration:
                return True
            else:
                print("OTP has expired.")
                return False
        else:
            print("Invalid OTP.")
            return False
    except User.DoesNotExist:
        print(f"User with email {email} does not exist.")
        return False
    except Exception as e:
        print(f"Failed to verify OTP for {email}: {str(e)}")
        return False