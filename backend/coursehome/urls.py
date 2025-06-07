from django.urls import path
from .views import (
    SuccessStoriesListCreateView,
    SuccessStoriesRetrieveUpdateDestroyView,
    FeaturedSuccessStoriesView
)

urlpatterns = [
    path('stories/', SuccessStoriesListCreateView.as_view(), name='stories-list-create'),
    path('stories/<int:pk>/', SuccessStoriesRetrieveUpdateDestroyView.as_view(), name='stories-retrieve-update-destroy'),
    path('stories/featured/', FeaturedSuccessStoriesView.as_view(), name='featured-stories'),
]