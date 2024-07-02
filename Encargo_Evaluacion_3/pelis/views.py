from django.shortcuts import render

from .models import Genero,Peliculas, Cancion

# Create your views here.
def index(request):
    pelis= Peliculas.objects.all()
    context={"peliculas":pelis}
    return render(request, 'pelis/index.html', context)

def index(request):
    canci= Cancion.objects.all()
    context={"cancion":canci}
    return render(request, 'pelis/index.html', context)
