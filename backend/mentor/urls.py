from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    MentorViewSet, MentorExperienceViewSet, EducationViewSet,
    MentorSkillViewSet, CoreDomainSkillViewSet,
    OfferingTypeViewSet, BookSessionsViewSet
)

router = DefaultRouter()
router.register(r'mentors', MentorViewSet)
router.register(r'experiences', MentorExperienceViewSet)
router.register(r'educations', EducationViewSet)
router.register(r'skills', MentorSkillViewSet)
router.register(r'core-skills', CoreDomainSkillViewSet)
router.register(r'offerings', OfferingTypeViewSet)
router.register(r'bookings', BookSessionsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
