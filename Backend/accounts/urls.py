from django.urls import path
from .views import signup

urlpatterns = [
    # User
    path('signup/', signup, name='signup'),

    # vendor
    # path('vendor/register/', VendorRegisterView.as_view(), name='register-vendor'),

]
