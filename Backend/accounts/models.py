# from datetime import datetime

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from .managers import CustomUserManager

class CustomUser(AbstractBaseUser, PermissionsMixin):
    USER_TYPE_CHOICES = (
        ('admin', 'Super Admin'),
        ('patient', 'Patient'),
        ('doctor', 'Doctor'),
    )

    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, blank=True)  # Optional
    last_name = models.CharField(max_length=30, blank=True)   # Optional
    user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES, default='admin')
    phone = models.IntegerField(blank=False, null=False, default=0, unique=True)
    gender = models.CharField(max_length=10, blank=True)
    date_of_birth = models.DateField(blank=True, null=True)
    current_address = models.TextField(null=True, blank=True)  # Allows null and empty values
    qualification = models.CharField(max_length=100, blank=True)
    specialization = models.CharField(max_length=100, blank=True)
    resume = models.FileField(upload_to='resumes/', null=True, blank=True)
    license = models.FileField(upload_to='licenses/', null=True, blank=True)
    # reset_password_token = models.CharField(max_length=50, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

    objects = CustomUserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_type']  # Fields required when creating superusers

    def __str__(self):
        return self.email