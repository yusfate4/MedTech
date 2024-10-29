from django.shortcuts import render

# Create your views here.

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

@api_view(['POST'])
def signup(request):
    # Extract data from the request
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')

    # Check if the user already exists
    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

    # Create a new user
    user = User.objects.create(
        username=username,
        password=make_password(password),  # Hash the password
        email=email
    )

    return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
