from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Mentors, MentorExperience, Education, MentorSkill, CoreDomainSkill, OfferingType, BookSessions
from .serializers import MentorSerializer, MentorExperienceSerializer, EducationSerializer, MentorSkillSerializer, CoreDomainSkillSerializer, OfferingTypeSerializer, BookSessionsSerializer

class MentorViewSet(viewsets.ModelViewSet):
    queryset = Mentors.objects.all()
    serializer_class = MentorSerializer

    @action(detail=True, methods=['get'])
    def experiences(self, request, pk=None):
        mentor = self.get_object()
        experiences = mentor.experiences.all()
        serializer = MentorExperienceSerializer(experiences, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def educations(self, request, pk=None):
        mentor = self.get_object()
        educations = mentor.educations.all()
        serializer = EducationSerializer(educations, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def skills(self, request, pk=None):
        mentor = self.get_object()
        skills = mentor.skills.all()
        serializer = MentorSkillSerializer(skills, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def core_domain_skills(self, request, pk=None):
        mentor = self.get_object()
        core_domain_skills = mentor.core_domain_skills.all()
        serializer = CoreDomainSkillSerializer(core_domain_skills, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def offerings(self, request, pk=None):
        mentor = self.get_object()
        offerings = mentor.offerings.all()
        serializer = OfferingTypeSerializer(offerings, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def book_sessions(self, request, pk=None):
        mentor = self.get_object()
        book_sessions = mentor.book_sessions.all()
        serializer = BookSessionsSerializer(book_sessions, many=True)
        return Response(serializer.data)

class MentorExperienceViewSet(viewsets.ModelViewSet):
    queryset = MentorExperience.objects.all()
    serializer_class = MentorExperienceSerializer

class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class MentorSkillViewSet(viewsets.ModelViewSet):
    queryset = MentorSkill.objects.all()
    serializer_class = MentorSkillSerializer

class CoreDomainSkillViewSet(viewsets.ModelViewSet):
    queryset = CoreDomainSkill.objects.all()
    serializer_class = CoreDomainSkillSerializer

class OfferingTypeViewSet(viewsets.ModelViewSet):
    queryset = OfferingType.objects.all()
    serializer_class = OfferingTypeSerializer

class BookSessionsViewSet(viewsets.ModelViewSet):
    queryset = BookSessions.objects.all()
    serializer_class = BookSessionsSerializer
