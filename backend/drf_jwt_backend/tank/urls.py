from django.urls import path, include
from tank import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_tanks),
    path('all/', views.get_all_tanks),
    # added for fix but no change in functionality happened
    path('api/add-tank/', include('authentication.urls')),
    path('tank/', views.user_tanks),
    # added for fix but no change in functionality happened
    path('add-tank/', views.user_tanks),
    path('<int:pk>/', views.tank_detail)
]
