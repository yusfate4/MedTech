from django.db import models

class UserProfile(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    gender = models.CharField(max_length=10)
    date_of_birth = models.DateField()
    password = models.CharField(max_length=100)  # Store hashed password in production

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class DoctorProfile(models.Model):
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    email = models.EmailField(unique=True)  # Ensures unique emails
    phone = models.CharField(max_length=15, blank=True)
    gender = models.CharField(max_length=10, choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    password = models.CharField(max_length=128)  # Consider using Django's built-in password handling
    current_address = models.TextField(blank=True)
    qualification = models.CharField(max_length=100, blank=True)
    specialization = models.CharField(max_length=100, blank=True)
    resume = models.FileField(upload_to='resumes/', null=True, blank=True)
    license = models.FileField(upload_to='licenses/', null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.email}"
