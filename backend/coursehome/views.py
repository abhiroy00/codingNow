from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.parsers import MultiPartParser, FormParser

# Create your views here.
from rest_framework import generics, permissions
from .models import SuccessStories
from .serializers import SuccessStoriesSerializer

class SuccessStoriesListCreateView(generics.ListCreateAPIView):
    queryset = SuccessStories.objects.all().order_by('-created_at')
    serializer_class = SuccessStoriesSerializer
    permission_classes = [AllowAny]

class SuccessStoriesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SuccessStories.objects.all()
    serializer_class = SuccessStoriesSerializer
    permission_classes = [AllowAny]

class FeaturedSuccessStoriesView(generics.ListAPIView):
    queryset = SuccessStories.objects.filter(is_featured=True).order_by('-created_at')
    serializer_class = SuccessStoriesSerializer
    permission_classes = [AllowAny]