from rest_framework import serializers
from .models import User, PatientProfile, DoctorProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_patient', 'is_doctor']

class PatientProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = PatientProfile
        fields = ['user', 'phone', 'gender', 'date_of_birth']

class DoctorProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = DoctorProfile
        fields = ['user', 'phone', 'gender', 'date_of_birth', 'current_address', 'qualification', 'specialization', 'resume', 'license']
