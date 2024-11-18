from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate

from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

# User = get_user_model()  # Reference to the custom user model
from .serializers import UserSerializer, DoctorSerializer, LoginSerializer

class SignUpView(APIView):
    def post(self, request):
        if request.data['user_type'] == 'patient':
            serializer = UserSerializer(data=request.data)
        elif request.data['user_type'] == 'doctor':
            serializer = DoctorSerializer(data=request.data)
        else:
            return Response({'error': 'Invalid user type'}, status=status.HTTP_400_BAD_REQUEST)
        
        if serializer.is_valid():
            user = serializer.save()
            user.set_password(request.data['password'])
            user.save()
            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




# Login View
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user_data = serializer.validated_data
            if 'doctor' in user_data:
                user = user_data['doctor']
                # Log in the doctor
                # ...
                return Response({'message': 'Doctor logged in successfully'})
            elif 'patient' in user_data:
                user = user_data['patient']
                # Log in the patient
                # ...
                return Response({'message': 'Patient logged in successfully'})
            else:
                return Response({'error': 'Invalid user type'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
