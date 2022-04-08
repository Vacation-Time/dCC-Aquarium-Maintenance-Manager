from rest_framework import serializers
from .models import Tank

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class TankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tank
        fields = ['id', 'user_id', 'tank_name', 'water_type', 'tank_size',
                  'fish_type', 'fish_amount', 'plant_type', 'plant_amount', 'tank_notes']
        depth = 1
