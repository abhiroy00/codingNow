from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
from django.utils import timezone


# Custom User Model
class User(AbstractUser):
    username = None  # We won't use the default username
    email = models.EmailField(unique=True)
    phone_no = PhoneNumberField(unique=True, null=True, blank=True)  # Phone number can be optional initially
    email_verified = models.BooleanField(default=False)  # Whether the email is verified or not
    otp_expiration = models.DateTimeField(null=True, blank=True)  # Add this field

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []  
    def __str__(self):
        return self.email


# Profile Model (Extra User Info)
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=1000)
    bio = models.CharField(max_length=100, blank=True, null=True)
    about = models.TextField(blank=True, null=True)
    profile_pic = models.ImageField(upload_to="user_images", default="default.jpg", blank=True, null=True)
    gender = models.CharField(max_length=10, choices=[('male', 'Male'), ('female', 'Female'), ('other', 'Other')], default='other')
    social_accounts = models.JSONField(default=dict, blank=True, null=True)
    verified = models.BooleanField(default=False)

    # OTP fields for email verification
    otp = models.CharField(max_length=6, blank=True, null=True)  # OTP for email verification
    otp_verified = models.BooleanField(default=False)  # Whether the OTP is verified

    def __str__(self):
        return f"{self.user.email} Profile"


def is_otp_expired(self):
        """
        Check if OTP has expired (more than 5 minutes).
        """
        if not self.otp_expiration:
            return True  # OTP hasn't been generated yet
        return timezone.now() > self.otp_expiration

def verify_otp(self, otp):
        """
        Verify OTP for the user.
        """
        # Check if OTP is expired
        if self.is_otp_expired():
            return "Your OTP has expired. Please try again."  # OTP expired message
        
        # Check if OTP matches
        if self.otp == otp:
            return "OTP verified successfully."
        
        return "Invalid OTP. Please try again."

# Signals to create and save Profile after User creation
from django.db.models.signals import post_save

def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)

