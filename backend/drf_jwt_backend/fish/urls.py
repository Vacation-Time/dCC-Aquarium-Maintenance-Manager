from django.urls import path, include
from fish import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_fish),
    path('all/', views.get_all_fish),
    path('fish/', views.user_fish),
    path('<int:pk>/', views.fish_detail)
]
