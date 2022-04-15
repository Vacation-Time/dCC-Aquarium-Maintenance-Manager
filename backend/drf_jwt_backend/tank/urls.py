from django.urls import path, include
from tank import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_tanks),
    path('all/', views.get_all_tanks),
    path('api/auth/', include('authentication.urls')),
    path('api/tank/', include('authentication.urls')),
    path('api/add/tank/', include('authentication.urls')),
    path('tank/', views.user_tanks),
    path('<int:pk>/', views.tank_detail)
]
