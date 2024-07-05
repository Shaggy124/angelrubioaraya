from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User

from .models import Genero,Peliculas, Cancion

# Create your views here.
def index(request):
    pelis= Peliculas.objects.all()
    canci= Cancion.objects.all()
    context={"peliculas":pelis,"cancion":canci}
    return render(request, 'pelis/index.html', context)

def registro(request):
    user= User.objects.get(username=request.POST["usuario"])
    
    if not user:
        nombre = request.POST["usuario"]
        email = request.POST["email"]
        password = request.POST["contrasenia"]
        user = User.objects.create_user(nombre, email, password)
        user.save()
        return redirect('index')
    else:
        messages.error(request, "ERROR, Usuario ya Registrado.")
        return redirect('index')