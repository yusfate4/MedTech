from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from .models import User, PatientProfile, DoctorProfile
from .serializers import PatientProfileSerializer, DoctorProfileSerializer
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from rest_framework.permissions import AllowAny



class PatientSignupView(APIView):
    def post(self, request):
        data = request.data
        user = User.objects.create_user(
            username=data['email'],
            email=data['email'],
            password=data['password'],
            first_name=data['first_name'],
            last_name=data['last_name'],
            is_patient=True
        )
        PatientProfile.objects.create(
            user=user,
            phone=data['phone'],
            gender=data['gender'],
            date_of_birth=data['date_of_birth']
        )
        return Response({"message": "Patient registered successfully"}, status=status.HTTP_201_CREATED)

class DoctorSignupView(APIView):
    def post(self, request):
        data = request.data
        user = User.objects.create_user(
            username=data['email'],
            email=data['email'],
            password=data['password'],
            first_name=data['first_name'],
            last_name=data['last_name'],
            is_doctor=True
        )
        DoctorProfile.objects.create(
            user=user,
            phone=data['phone'],
            gender=data['gender'],
            date_of_birth=data['date_of_birth'],
            current_address=data['current_address'],
            qualification=data['qualification'],
            specialization=data['specialization'],
            resume=data['resume'],
            license=data['license']
        )
        return Response({"message": "Doctor registered successfully"}, status=status.HTTP_201_CREATED)

class LoginView(APIView):
    def post(self, request):
        data = request.data
        user = authenticate(username=data['email'], password=data['password'])
        if user:
            if user.is_patient:
                return Response({"message": "Login successful", "redirect": "patient_dashboard"}, status=status.HTTP_200_OK)
            elif user.is_doctor:
                return Response({"message": "Login successful", "redirect": "doctor_dashboard"}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

class ProfileView(APIView):
    def get(self, request):
        user = request.user
        if user.is_patient:
            profile = PatientProfile.objects.get(user=user)
            serializer = PatientProfileSerializer(profile)
        elif user.is_doctor:
            profile = DoctorProfile.objects.get(user=user)
            serializer = DoctorProfileSerializer(profile)
        else:
            return Response({"error": "Invalid user type"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request):
        user = request.user
        data = request.data
        if user.is_patient:
            profile = PatientProfile.objects.get(user=user)
            for attr, value in data.items():
                setattr(profile, attr, value)
            profile.save()
        elif user.is_doctor:
            profile = DoctorProfile.objects.get(user=user)
            for attr, value in data.items():
                setattr(profile, attr, value)
            profile.save()
        else:
            return Response({"error": "Invalid user type"}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"message": "Profile updated successfully"}, status=status.HTTP_200_OK)






class PasswordResetRequestView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        user = User.objects.filter(email=email).first()
        if user:
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            reset_link = f"http://frontend_url/reset-password/{uid}/{token}/"
            send_mail(
                "Password Reset Request",
                f"Click the link to reset your password: {reset_link}",
                "no-reply@example.com",
                [email]
            )
            return Response({"message": "Password reset link sent"}, status=status.HTTP_200_OK)
        return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
