from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin


class CustomUserAdmin(UserAdmin):
    list_display = ['email', 'is_patient', 'is_doctor']
    list_filter = ['is_patient', 'is_doctor']

admin.site.register( [User,DoctorProfile,PatientProfile] )

