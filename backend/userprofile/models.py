from django.db import models
from userauth.models import User
import uuid

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    uuid = models.CharField(max_length=20, default=uuid.uuid4, unique=True)
    name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    bio = models.TextField(blank=True)
    about = models.TextField(blank=True)
    profile_pic = models.URLField(blank=True, null=True)
    session_charge = models.PositiveIntegerField(default=200)
    gender = models.CharField(max_length=10, choices=[('male', 'Male'), ('female', 'Female'), ('other', 'Other')], default='male')
    phone_number = models.CharField(max_length=15, blank=True)
    email = models.EmailField()
    accept_terms = models.BooleanField(default=False)
    is_mentor = models.BooleanField(default=False)
    allow_notifications = models.BooleanField(default=True)
    is_deleted = models.BooleanField(default=False)
    role = models.CharField(max_length=20, default="user")
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Experience(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name="experiences")
    title = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=255, blank=True)
    is_current = models.BooleanField(default=False)  # If the job is current
    description = models.TextField(blank=True)

class Education(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name="education")
    degree = models.CharField(max_length=255)
    institution = models.CharField(max_length=255)
    start_year = models.IntegerField()
    end_year = models.IntegerField(null=True, blank=True)
    description = models.TextField(blank=True)

class Achievement(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name="achievements")
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    url = models.URLField(blank=True, null=True)  # Optional: proof link, certificate, etc.
    is_deleted = models.BooleanField(default=False)  # Soft delete toggle
    date = models.DateField()


class SocialProfile(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name="social_profiles")
    platform = models.CharField(max_length=100)
    link = models.URLField()

class DomainTag(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name="user_domain_tags")
    name = models.CharField(max_length=100)

class AdminPermissions(models.Model):
    user_profile = models.OneToOneField(UserProfile, on_delete=models.CASCADE, related_name="admin_permissions")
    allow_long_term_subscriptions = models.BooleanField(default=False)
    allow_bootcamps = models.BooleanField(default=False)
    allow_free_session = models.BooleanField(default=False)

class SessionPricing(models.Model):
    user_profile = models.OneToOneField(UserProfile, on_delete=models.CASCADE, related_name="session_pricing")
    is_active = models.BooleanField(default=False)
    is_price_updated = models.BooleanField(default=False)
    details = models.JSONField(default=list, blank=True, null=True)
