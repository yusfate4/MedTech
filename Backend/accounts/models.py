from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    is_user_profile = models.BooleanField(default=False)
    is_doctor_profile = models.BooleanField(default=False)


    # username = models.CharField(max_length=150)
    # email = models.EmailField(unique=True)  # Make email the unique identifier

    # USERNAME_FIELD = 'email'  # Set email as the unique identifier
    # REQUIRED_FIELDS = []  # No additional fields are required by default

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
    current_address = models.TextField()
    qualification = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    resume = models.FileField(upload_to='resumes/')
    license = models.FileField(upload_to='licenses/')

    def __str__(self):
        return self.user.first_name
