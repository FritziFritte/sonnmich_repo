from django.db import models
from django.urls import reverse # Neu


class Adressen(models.Model):
    vorname = models.CharField(max_length=50)
    nachname = models.CharField(max_length=50)
    strasse = models.CharField(max_length=100)
    plz = models.IntegerField()
    ort = models.CharField(max_length=100)
    
    def __str__(self): # Neu
        return self.nachname # Neu

    def get_absolute_url(self): # Neu
        return reverse('adress_detail', args=[str(self.id)]) # Neu