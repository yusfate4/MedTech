from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from .views import DoctorViewSet, PatientViewSet, LogoutView, RegisterView, UserProfileView

router = DefaultRouter()
router.register(r'doctors', DoctorViewSet)
router.register(r'patients', PatientViewSet)

urlpatterns = router.urls + [
    path('auth/login/', obtain_auth_token, name='api_login'),
    path('auth/logout/', LogoutView.as_view(), name='api_logout'),
    path('auth/register/', RegisterView.as_view(), name='api_register'),
    path('auth/profile/', UserProfileView.as_view(), name='api_profile'),
]