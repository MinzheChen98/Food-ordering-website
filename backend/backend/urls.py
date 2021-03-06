"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from homepage.views import render_home_page
from homepage.views import signup_user
from homepage.views import login_user

urlpatterns = [
    path('api/', render_home_page, name='homepage'),
    path('api/signup/', signup_user, name='signup'),
    path('api/login/', login_user, name='login'),
    path('supersecreturlforadminpagedontleak/', admin.site.urls),
]
