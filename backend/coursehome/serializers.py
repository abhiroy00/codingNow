from rest_framework import serializers
from .models import SuccessStories

class SuccessStoriesSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    image = serializers.ImageField(
        required=False,
        allow_null=True,
        max_length=None,
        use_url=True
    )

    class Meta:
        model = SuccessStories
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at', 'image_url')

    def get_image_url(self, obj):
        if obj.image:
            return obj.image.url
        return None

    def validate_image(self, value):
        # Add validation for image size and type
        if value:
            if value.size > 5 * 1024 * 1024:  # 5MB limit
                raise serializers.ValidationError("Image size cannot exceed 5MB")
            valid_extensions = ['jpg', 'jpeg', 'png', 'gif']
            extension = value.name.split('.')[-1].lower()
            if extension not in valid_extensions:
                raise serializers.ValidationError(
                    f"Unsupported file extension. Supported extensions: {', '.join(valid_extensions)}"
                )
        return value