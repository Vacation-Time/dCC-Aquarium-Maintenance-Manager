from rest_framework import serializers
from .models import Tank

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class TankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tank
        fields = ['id', 'user_id', 'tank_name', 'water_type', 'tank_size', 'water_temp_chk_last_done', 'value', 'next_due', 'water_change_last_done', 'amount_%', 'next_due',
                  'plant_care_last_done', 'next_due', 'water_level_chk_last_done', 'ph_level', 'nitrite_level', 'nitrate_level', 'o2_level', 'next_due', 'notes']
        depth = 1
