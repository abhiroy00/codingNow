from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.parsers import MultiPartParser, FormParser
from .models import SuccessStories
from .serializers import SuccessStoriesSerializer

class SuccessStoriesListCreateView(generics.ListCreateAPIView):
    queryset = SuccessStories.objects.all().order_by('-created_at')
    serializer_class = SuccessStoriesSerializer
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser]  # Required for file uploads

    def perform_create(self, serializer):
        # You can add additional logic here before saving
        serializer.save()

class SuccessStoriesRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SuccessStories.objects.all()
    serializer_class = SuccessStoriesSerializer
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser]  # Required for file updates

class FeaturedSuccessStoriesView(generics.ListAPIView):
    queryset = SuccessStories.objects.filter(is_featured=True).order_by('-created_at')
    serializer_class = SuccessStoriesSerializer
    permission_classes = [AllowAny]