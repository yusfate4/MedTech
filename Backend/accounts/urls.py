from django.urls import path
from .views import UserSignupView, DoctorSignupView, LoginView

urlpatterns = [
    path('api/signup/user/', UserSignupView.as_view(), name='user-signup'),
    path('api/signup/doctor/', DoctorSignupView.as_view(), name='doctor-signup'),
    # path('login/', LoginView.as_view(), name='login'),
    path('api/login/', LoginView.as_view(), name='login')
]
