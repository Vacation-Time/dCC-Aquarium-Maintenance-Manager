from django.urls import path, include
from tank import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_tanks),
    path('all/', views.get_all_tanks),
]
