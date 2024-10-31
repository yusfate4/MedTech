from django.contrib.auth.models import AbstractUser
from django.db import models
from .managers import CustomUserManager  # Import your custom manager

class User(AbstractUser):
    is_user_profile = models.BooleanField(default=False)
    is_doctor_profile = models.BooleanField(default=False)

    username = None  # Remove the username field
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'  # Use email as the unique identifier
    REQUIRED_FIELDS = []  # Superusers won't need any additional fields

    objects = CustomUserManager()  # Use the custom manager

    def __str__(self):
        return self.email
    


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_profile')
    phone = models.CharField(max_length=15)
    gender = models.CharField(max_length=10)
    date_of_birth = models.DateField()

    def __str__(self):
        return self.user.first_name + ' ' + self.user.last_name

class DoctorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='doctor_profile')
    phone = models.CharField(max_length=15)
    gender = models.CharField(max_length=10)
    date_of_birth = models.DateField()
    current_address = models.TextField(null=True, blank=True)  # Allows null and empty values
    qualification = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    resume = models.FileField(upload_to='resumes/', null=True, blank=True)
    license = models.FileField(upload_to='licenses/', null=True, blank=True)


    def __str__(self):
        return self.user.first_name + ' ' + self.user.last_name

