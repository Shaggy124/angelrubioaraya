from django.shortcuts import render

from .models import Genero,Peliculas

# Create your views here.
def index(request):
    pelis= Peliculas.objects.all()
    context={"peliculas":pelis}
    return render(request, 'pelis/index.html', context)
