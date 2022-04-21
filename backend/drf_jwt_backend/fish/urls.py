from django.urls import path, include
from fish import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_fish),
    path('all/', views.get_all_fish),
    # added for fix but no change in functionality happened
    path('api/add-fish/', include('authentication.urls')),
    path('fish/', views.user_fish),
    # added for fix but no change in functionality happened
    path('add-fish/', views.user_fish),
    path('<int:pk>/', views.fish_detail)
]
