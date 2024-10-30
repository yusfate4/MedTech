from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from .models import User, UserProfile, DoctorProfile


class CustomUserAdmin(UserAdmin):
    list_display = ['email']

    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'email')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )

# Register User model with CustomUserAdmin directly
admin.site.register(User, CustomUserAdmin)


# Register your models here.
# admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(DoctorProfile)


