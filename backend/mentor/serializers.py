from rest_framework import serializers
from .models import Mentors, MentorExperience, Education, MentorSkill, CoreDomainSkill, OfferingType, BookSessions

class MentorExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentorExperience
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class MentorSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentorSkill
        fields = '__all__'

class CoreDomainSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoreDomainSkill
        fields = '__all__'

class OfferingTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = OfferingType
        fields = '__all__'

class BookSessionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookSessions
        fields = '__all__'

class MentorSerializer(serializers.ModelSerializer):
    experiences = MentorExperienceSerializer(many=True, read_only=True)
    educations = EducationSerializer(many=True, read_only=True)
    skills = MentorSkillSerializer(many=True, read_only=True)
    core_domain_skills = CoreDomainSkillSerializer(many=True, read_only=True)
    offerings = OfferingTypeSerializer(many=True, read_only=True)
    book_sessions = BookSessionsSerializer(many=True, read_only=True)

    class Meta:
        model = Mentors
        fields = '__all__'
