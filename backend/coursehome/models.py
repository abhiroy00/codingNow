from django.db import models
from django.utils import timezone

class SuccessStories(models.Model):
    # Assuming these are the fields based on your serializer
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(
        upload_to='success_stories/',  # Specify your upload directory
        null=True,
        blank=True,
        max_length=255  # Matching the serializer's max_length
    )
    created_at = models.DateTimeField(default=timezone.now, editable=False)
    updated_at = models.DateTimeField(auto_now=True)
    
    # Add any other fields you need that are included in '__all__' in the serializer
    
    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Success Story"
        verbose_name_plural = "Success Stories"
        # Add any other model meta options you need