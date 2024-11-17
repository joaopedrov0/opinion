from django.shortcuts import render
from django.http import HttpResponse
from modules import *

# |ll classes used here are in the modules folder

# Create your views here.
def HomePage(request):
    return render(request, 'home/home_page.html')