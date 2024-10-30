from django.urls import path
from .views import UserSignupView, DoctorSignupView
# , LoginView

urlpatterns = [
    path('signup/user/', UserSignupView.as_view(), name='user-signup'),
    path('signup/doctor/', DoctorSignupView.as_view(), name='doctor-signup'),
    # path('login/', LoginView.as_view(), name='login'),
]
