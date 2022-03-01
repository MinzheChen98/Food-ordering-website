from django.db import IntegrityError
from django.shortcuts import render
from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User

# Create your views here.

def render_home_page(request):
    return render(request, 'homepage.html')

def signup_user(request):
    if request.method == 'POST':
        try:
            user = User.objects.create_user(request.POST[''], request.POST['username'], password=request.POST['password'])
            user.save()
            login(request, user)
            return render(request, 'loggedin.html', {'user_name': user.email})
        except IntegrityError:
            return render(request, 'error.html')
    else:
        print('request method was GET')
    
def login_user(request):
    if request.method == 'POST':
        user = authenticate(request, username=request.POST['username'], password=request.POST['password'])
        if user is None:
            return render(request, 'error.html')
        else:
            login(request, user)
            return render(request, 'loggedin.html', {'user_name': user.email})
    else:
        print('request method was GET')