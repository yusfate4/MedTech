from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import UserProfile
from .serializers import UserProfileSerializer
from django.contrib.auth.hashers import make_password

@api_view(['POST'])
def create_user_profile(request):
    data = request.data
    data['password'] = make_password(data['password'])  # Hash the password
    
    serializer = UserProfileSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User profile created successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# add doctor views