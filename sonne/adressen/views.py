from django.shortcuts import render
from django.urls import reverse_lazy # Neu
from django.views.generic import ListView # Neu
from django.views.generic import CreateView # Neu
from django.views.generic import DetailView # Neu
from django.views.generic import UpdateView # Neu
from django.views.generic import DeleteView # Neu


from .models import Adressen # Neu

class AdressHome(ListView): # Neu
    model = Adressen # Neu
    template_name = 'adressen/adress_home.html' # Neu
    
class AdressCreate(CreateView): # Neu
    model = Adressen # Neu
    template_name = 'adressen/adress_create.html' # Neu
    fields = '__all__' # Neu
    success_url = reverse_lazy('adress_start') # Neu
    
class AdressDetail(DetailView): # Neu
    model = Adressen # Neu
    template_name = 'adressen/adress_detail.html' # Neu
    
class AdressUpdate(UpdateView): # Neu
    model = Adressen # Neu
    template_name = 'adressen/adress_update.html' # Neu
    fields = '__all__' # Neu
    
class AdressDelete(DeleteView): # Neu
    model = Adressen # Neu
    template_name = 'adressen/adress_delete.html' # Neu
    success_url = reverse_lazy('adress_start') # Neu