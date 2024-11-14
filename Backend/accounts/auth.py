# from django.contrib.auth.backends import ModelBackend
# from django.contrib.auth.models import User

# class CustomAuthBackend(ModelBackend):
#     def authenticate(self, request, email=None, password=None):
#         try:
#             user = User.objects.get(email=email)
#             if user.check_password(password):
#                 return user
#         except User.DoesNotExist:
#             pass

#         # Also check the child tables
#         try:
#             customer = Customer.objects.get(email=email)
#             if customer.check_password(password):
#                 return customer
#         except Customer.DoesNotExist:
#             pass

#         try:
#             service_provider = ServiceProvider.objects.get(email=email)
#             if service_provider.check_password(password):
#                 return service_provider
#         except ServiceProvider.DoesNotExist:
#             pass

#         return None
