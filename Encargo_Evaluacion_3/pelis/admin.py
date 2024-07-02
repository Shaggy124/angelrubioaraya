from django.contrib import admin
from .models import Genero, Peliculas, Musica, Cancion

# Register your models here.
admin.site.register(Genero)
admin.site.register(Peliculas)
admin.site.register(Musica)
admin.site.register(Cancion)