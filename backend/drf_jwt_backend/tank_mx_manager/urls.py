from django.urls import path, include
from tank_mx_manager import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_mx_manager),
    path('all/', views.get_all_mx_managers),
    path('api/auth/', include('authentication.urls')),
    path('api/mxmanager/', include('authentication.urls')),
    path('mxmanager/', views.user_mx_manager),
]
