from rest_framework import serializers
from .models import Ticket, User, Event

""" class UserTicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = ['id', 'username'] """

# Categoria Seriliazer
class EventTicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id','name','date','ticketPrice','event_images', 'location']


class TicketSerializer(serializers.ModelSerializer):

    event = EventTicketSerializer(read_only=True)

    class Meta:
        model = Ticket
        fields = ["id", "created_at","event"]