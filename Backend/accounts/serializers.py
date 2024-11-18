from rest_framework import serializers
from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email', 'first_name', 'last_name', 'user_type', 'phone', 'gender', 'date_of_birth', 'password']

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email', 'first_name', 'last_name', 'user_type', 'phone', 'gender', 'date_of_birth', 'current_address', 'qualification', 'specialization', 'resume', 'license', 'password']


# Login Serializer
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(max_length=128)

    def validate(self, data):
        email = data['email']
        password = data['password']
        user = CustomUser.objects.get(email=email)
        if user and user.check_password(password):
            if user.user_type == 'doctor':
                return {'doctor': user}
            elif user.user_type == 'patient':
                return {'patient': user}
            else:
                raise serializers.ValidationError("Invalid user type")
        else:
            raise serializers.ValidationError("Invalid email or password")

