from rest_framework.routers import DefaultRouter
from .views import DoctorViewSet, PatientViewSet

router = DefaultRouter()
router.register(r'doctors', DoctorViewSet)
router.register(r'patients', PatientViewSet)

urlpatterns = router.urls