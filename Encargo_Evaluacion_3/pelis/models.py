from django.db import models

# Create your models here.
class Genero(models.Model):
    id_genero  = models.AutoField(db_column='idGenero', primary_key=True) 
    genero     = models.CharField(max_length=20, blank=False, null=False)

    def __str__(self):
        return str(self.genero)

class Peliculas(models.Model):
    ranking          = models.IntegerField(primary_key=True)
    titulo           = models.CharField(max_length=70)
    descripcion      = models.CharField(max_length=300)
    anio             = models.IntegerField()
    calificacion     = models.IntegerField() 
    id_genero        = models.ForeignKey('Genero',on_delete=models.CASCADE, db_column='idGenero')  
    image            = models.CharField(max_length=300)
    
    def __str__(self):
        return str(self.titulo)+" "+str(self.calificacion) 