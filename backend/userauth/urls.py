from django.urls import path
from .views import (
    register, verify_otp, login,verify_login, forgot_password, reset_password, resend_otp
)
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('signup/', register, name='signup'),
    path('verify-signup/', verify_otp, name='signup'),
    path('login/', login, name='login'),
    path('verify-login/', verify_login, name='verify_login'),
    path('forgot-password/', forgot_password, name='forgot_password'),
    path('reset-password/', reset_password, name='reset_password'),
    path('resend-otp/', resend_otp, name='resend_otp'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]