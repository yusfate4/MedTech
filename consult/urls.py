from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'doctors', views.DoctorViewSet)
router.register(r'patients', views.PatientViewSet)


app_name = "consult"
urlpatterns = [
    path('', include(router.urls)),
    # You can keep your existing views if needed
    path("index/", views.IndexView.as_view(), name="index"),
    path("<int:pk>/detail/", views.DetailView.as_view(), name="detail"),
    path("<int:pk>/results/", views.ResultsView.as_view(), name="results"),
    path("<int:question_id>/vote/", views.vote, name="vote"),
]

