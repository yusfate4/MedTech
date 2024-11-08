# backends.py
from django.contrib.auth.backends import BaseBackend
from django.contrib.auth import get_user_model

User = get_user_model()

class EmailBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        print("Authenticating user with email:", username)  # Debugging output

        try:
            user = User.objects.get(email=username)
            print("User found:", user)  # Debugging output
        except User.DoesNotExist:
            print("User does not exist")
            return None

        if user.check_password(password):
            print("Password is correct")
            return user
        print("Password is incorrect")
        return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None
