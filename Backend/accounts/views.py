from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.parsers import MultiPartParser


from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token  # Only if using token-based authentication
from .models import User, UserProfile, DoctorProfile
from .serializers import UserSerializer, UserProfileSerializer, DoctorProfileSerializer, LoginSerializer
from django.db import transaction


User = get_user_model()  # Reference to the custom user model

# User Signup View
class UserSignupView(APIView):
    permission_classes = [AllowAny]

    @transaction.atomic
    def post(self, request, *args, **kwargs):
        # Extract user and profile data from request
        user_data = {
            "first_name": request.data.get("first_name"),
            "last_name": request.data.get("last_name"),
            "email": request.data.get("email"),
            "password": request.data.get("password")
        }
        profile_data = {
            "phone": request.data.get("phone"),
            "gender": request.data.get("gender"),
            "date_of_birth": request.data.get("date_of_birth")
        }

        # print("Received data:", request.data)

        # Validate and save the user
        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user = user_serializer.save()
            user.set_password(user.password)  # Hash the password
            user.save()
            
            # Validate and save the user profile
            profile_serializer = UserProfileSerializer(data=profile_data)
            if profile_serializer.is_valid():
                profile_serializer.save(user=user)  # Link profile to user
                return Response({
                    "user": user_serializer.data,
                    "profile": profile_serializer.data,
                    "token": Token.objects.create(user=user).key
                }, status=status.HTTP_201_CREATED)
            else:
                user.delete()  # Clean up user if profile data is invalid
                return Response(profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Doctor Signup View
class DoctorSignupView(APIView):
    parser_classes = [MultiPartParser]
    permission_classes = [AllowAny]

    @transaction.atomic
    def post(self, request, *args, **kwargs):
        # Extract user and profile data from request
        user_data = {
            "first_name": request.data.get("first_name"),
            "last_name": request.data.get("last_name"),
            "email": request.data.get("email"),
            "password": request.data.get("password")
        }
        profile_data = {
            "phone": request.data.get("phone"),
            "gender": request.data.get("gender"),
            "date_of_birth": request.data.get("date_of_birth"),
            "current_address": request.data.get("currentAddress"),
            "qualification": request.data.get("qualification"),
            "specialization": request.data.get("specialization"),
            "resume": request.data.get("resume"),
            "license": request.data.get("license")
        }

        # Validate and save the user
        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user = user_serializer.save()
            user.set_password(user.password)  # Hash the password
            user.save()

            # Validate and save the doctor profile
            profile_serializer = DoctorProfileSerializer(data=profile_data)
            if profile_serializer.is_valid():
                profile_serializer.save(user=user)  # Link profile to user
                return Response({
                    "user": user_serializer.data,
                    "profile": profile_serializer.data,
                    "token": Token.objects.create(user=user).key
                }, status=status.HTTP_201_CREATED)
            else:
                user.delete()  # Clean up user if profile data is invalid
                return Response(profile_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# Login View
class LoginView(APIView):
    def post(self, request):
        print("Received data:", request.data)
        serializer = LoginSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.validated_data["user"]
            token, created = Token.objects.get_or_create(user=user)  # Generate token if needed
            return Response({"token": token.key, "message": "Login successful"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)