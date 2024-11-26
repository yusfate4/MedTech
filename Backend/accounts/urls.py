from django.urls import path
from .views import PatientSignupView, DoctorSignupView, LoginView, ProfileView

urlpatterns = [
    path('signup/patient/', PatientSignupView.as_view(), name='signup_patient'),
    path('signup/doctor/', DoctorSignupView.as_view(), name='signup_doctor'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', ProfileView.as_view(), name='profile'),
]
