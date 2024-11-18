from django.urls import path
from .views import SignUpView, LoginView

urlpatterns = [
    path('api/signup/', SignUpView.as_view(), name='signup'),
    # path('api/signup/doctor/', DoctorSignupView.as_view(), name='doctor-signup'),
    # path('login/', LoginView.as_view(), name='login'),
    path('api/login/', LoginView.as_view(), name='login')
]
