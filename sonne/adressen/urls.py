from django.urls import pathfrom .views import AdressHomefrom .views import AdressCreate # Neufrom .views import AdressDetail # Neufrom .views import AdressUpdate # Neufrom .views import AdressDelete # Neufrom django.conf.urls.static import staticfrom django.conf import settingsurlpatterns = [     path('', AdressHome.as_view(), name='adress_start'),     path('neu/', AdressCreate.as_view(), name='neue_adresse'), # Neu     path('<int:pk>/', AdressDetail.as_view(), name='adress_detail'), # Neu     path('<int:pk>/update/', AdressUpdate.as_view(), name='adress_update'), # Neu     path('<int:pk>/delete/', AdressDelete.as_view(), name='adress_delete'), # Neu]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)