from rest_framework import serializers
from .models import Tank

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class TankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tank
        fields = ['id', 'tank_name', 'water_type', 'tank_size', 'water_temp_chk_last_done', 'value', 'next_temp_chk_due', 'water_change_last_done', 'amount_percent',
                  'next_water_change_due', 'plant_care_last_done', 'next_plant_chk_due', 'water_levels_chk_last_done', 'ph_level', 'nitrite_level', 'nitrate_level', 'o2_level', 'next_levels_chk_due', 'tank_notes']
        depth = 1
