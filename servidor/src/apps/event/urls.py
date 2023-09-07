from rest_framework import routers
from .views import EventView, EventDetailView, EventCategoryView, CategoryView
from apps.ticket.views import TicketView
from django.urls import path

urlpatterns = [
    path('events/', EventView.as_view(), name='events' ),
    path('events/<pk>/', EventDetailView.as_view(), name="event_detail"),
    path('events/category/<str:category_name>', EventCategoryView.as_view(), name='event_category'),
    path('categories/', CategoryView.as_view(), name='categories')
]

#TICKETS

urlpatterns += [
    path('events/<int:pk>/tickets', TicketView.as_view(), name='tickets')
]
