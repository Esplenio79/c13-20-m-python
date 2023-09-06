from django.db import models
from apps.user.models import User
from .category import Category

class Event(models.Model):
    categories = models.ManyToManyField(Category)
    eventHost = models.ForeignKey(User, on_delete = models.CASCADE)
    name = models.CharField(max_length = 200)
    description = models.TextField() 
    capacity = models.PositiveIntegerField(default = 0)
    date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    virtual = models.BooleanField(default = False)
    state = models.BooleanField(default = True) # Si el boolean es true, el evento sigue activo
    ticketPrice = models.FloatField()
    event_images  =  models.ImageField(null = True, blank = True, upload_to= 'images/')            # Para usar models.ImageField(upload_to = PATH   ) 
    #  el upload to hay que setearlo a un path existente donde se van a guardar las imagenes
    location = models.CharField(max_length = 200 ) #location field

    def __str__(self):
        return self.name