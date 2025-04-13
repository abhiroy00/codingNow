#basic Django imports
from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator

#default user model in django
User = get_user_model()

class Mentors(models.Model):
    # main mentor profile model that extends django's user model
    # contains extra profile information and statistics
    # links to django's built-in user model (one-to-one relationship)

    user = models.OneToOneField( #for 1 user > 1 mentor
        User, 
        on_delete=models.CASCADE,  # delete mentor if user is deleted
        related_name='mentor_profile'  # access mentor from user via user.mentor_profile
    )

    # Profile headline (e.g., "SDE2 @ Amazon"), current designation
    headline = models.CharField(
        max_length=200,  # Maximum length of the headline
        null=True,  # Optional field
        blank=True  # Can be empty in forms
    )

    # Short bio for cards/previews
    # should be in user model
    
    # Detailed bio for profile page
    # should be in user model

    # Profile and cover photos with upload paths
    # should be in user model

    # Rating (0.0-5.0 scale)
    rating = models.FloatField(
        default=0.0,
        validators=[
            MinValueValidator(0.0),  # Minimum value 0
            MaxValueValidator(5.0)   # Maximum value 5
        ],
        null=True,  # Optional field
        blank=True  # Can be empty in forms
    )

    #sessions count
    session_count = models.PositiveIntegerField(
        default=0,  # Total sessions conducted
        null=True,  # Optional field
        blank=True  # Can be empty in forms
    )

    #follower count
    follower_count = models.PositiveIntegerField(
        default=0,  # Total followers
        null=True,  # Optional field
        blank=True  # Can be empty in forms
    )

    #verification flags
    is_faang = models.BooleanField(
        default=False,  # FAANG company employee
        null=True,  # Optional field
        blank=True  # Can be empty in forms
    )
    is_top_tier = models.BooleanField(
        default=False,  # Top-tier company
        null=True,  # Optional field
        blank=True  # Can be empty in forms
    )
    is_verified = models.BooleanField(
        default=False,  # Platform-verified profile
        null=True,  # Optional field
        blank=True  # Can be empty in forms
    )
    is_accepting_new_mentees = models.BooleanField(
        default=True,  # Availability status
        null=True,  # Optional field
        blank=True  # Can be empty in forms
    )

    # Meta class for ordering
    class Meta:
        ordering = ['-rating']  # Default ordering by highest rating
    
    def __str__(self):
        # String representation of the mentor profile
        return f"{self.user.get_full_name()} (Rating: {self.rating})"
    
class MentorExperience(models.Model):
    """
    Tracks a mentor's professional work experience
    """
    # Foreign key to the Mentors model
    mentor = models.ForeignKey(
        Mentors,
        on_delete=models.CASCADE,  # Delete experiences if mentor is deleted
        related_name='experiences'  # Access via mentor.experiences
    )
    
    company = models.CharField(
        max_length=100,  # Company name
        null=True,  # Optional field
        blank=True  # Can be empty in forms
    )
    position = models.CharField(
        max_length=100,  # Job title
        null=True,  # Optional field
        blank=True  # Can be empty in forms
    )
    is_current = models.BooleanField(default=False)  # Current employment flag
    
    #emplyment history
    start_date = models.DateField()  # Required start date
    end_date = models.DateField(
        null=True,  # Optional end date
        blank=True  # Can be empty in forms
    )
    description = models.TextField(
        blank=True  # Job description
    )
    class Meta:
        ordering = ['-is_current', '-start_date']   # Current jobs first, then by date

class Education(models.Model):
    """
    Tracks a mentor's educational background
    """
    # Foreign key to the Mentors model
    mentor = models.ForeignKey(
        Mentors,
        on_delete=models.CASCADE,
        related_name='educations'  # Access via mentor.educations
    )
    
    institution = models.CharField(
        max_length=100,  # Institution name
    )
    degree = models.CharField(
        max_length=100,  # Degree title (e.g., B.Tech, M.S.)
    )
    field_of_study = models.CharField(
        max_length=100,  # Major or specialization
    )

    # Academic years
    start_year = models.IntegerField()  # Start year
    end_year = models.IntegerField()  # Graduation year

class MentorSkill(models.Model):
    """
    Skills possessed by mentors with proficiency levels
    """
    # Foreign key to the Mentors model
    mentor = models.ForeignKey(
        Mentors,
        on_delete=models.CASCADE,
        related_name='skills'  # Access via mentor.skills
    )
    
    skill_name = models.CharField(
        max_length=100,  # Skill name (e.g., Python, Java)
        null=True,  # Optional field
        blank=True  # Can be empty in forms
    )

class CoreDomainSkill(models.Model):
    """
    Core domain skills of mentors, indicating primary expertise
    """
    # Foreign key to the Mentors model
    mentor = models.ForeignKey(
        Mentors,
        on_delete=models.CASCADE,
        related_name='core_domain_skills'  # Access via mentor.core_domain_skills
    )
    
    skill_name = models.CharField(
        max_length=100,  # Skill name (e.g., Data Science)
        null=True,  # Optional field
        blank=True  # Can be empty in forms
    )

class OfferingType(models.Model):
    """
    "WHAT I OFFER" PAGE
    Types of offerings provided by mentors (e.g., 1:1 sessions, group sessions)
    """
    # Foreign key to the Mentors model
    mentor = models.ForeignKey(
        Mentors,
        on_delete=models.CASCADE,
        related_name='offerings'  # Access via mentor.offerings
    )
    offer_name = models.CharField(
        max_length=100,  # Offering type name (e.g., "Webinar")
    )
    offer_icon = models.CharField(
        max_length=30,  # Icon class for frontend representation
        blank=True  # Can be empty in forms
    )
    
class BookSessions(models.Model):
    """
    Specific services/offerings provided by mentors
    """
    # Foreign key to the Mentors model
    mentor = models.ForeignKey(
        Mentors,
        on_delete=models.CASCADE,
        related_name='bookings'  # Access via mentor.offerings
    )

    booking_title = models.CharField(max_length=100)  # Offering title
    description = models.TextField(
        blank=True,  # Detailed description
        null=True  # Optional field
    )  # Detailed description
    
    # Pricing and duration
    base_price = models.DecimalField(
        max_digits=10,  # Maximum digits (including decimals)
        decimal_places=2  # 2 decimal places (currency)
    )
    
    # Package-specific fields
    is_package = models.BooleanField(default=False)  # Is bundled offering
    session_1_on_1 = models.PositiveIntegerField(default=True)  # Sessions in package
    session_cost = models.DecimalField(
        max_digits=10,  # Maximum digits (including decimals)
        decimal_places=2,  # 2 decimal places (currency)
        null=True,  # Optional field
        blank=True  # Can be empty in forms
    )
    discount_percentage = models.PositiveIntegerField(default=0)  # Package discount
    emi_available = models.BooleanField(default=False)  # EMI payment option
    emi_amount = models.DecimalField(
        max_digits=10,  # Maximum digits (including decimals)
        decimal_places=2,  # 2 decimal places (currency)
        null=True,  # Optional field
        blank=True  # Can be empty in forms
    )

    class Meta:
        ordering = ['base_price']  # Sort by price ascending

# class mentor post is same as user post, so should be taken from user model
# same thing for reviews