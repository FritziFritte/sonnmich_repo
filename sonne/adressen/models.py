from django.db import models
from django.urls import reverse # Neu


class Adressen(models.Model):
    name = models.CharField(max_length=100)
    strasse = models.CharField(max_length=100)
    hausnummer = models.IntegerField()
    plz = models.IntegerField()
    ort = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/', max_length=255)

    
    
    def __str__(self): # Neu
        return self.nachname # Neu

    def get_absolute_url(self): # Neu
        return reverse('adress_detail', args=[str(self.id)]) # Neu