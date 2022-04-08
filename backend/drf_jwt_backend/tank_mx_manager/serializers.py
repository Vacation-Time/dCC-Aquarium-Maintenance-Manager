from rest_framework import serializers
from .models import MxManager

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class MxManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = MxManager
        fields = ['id', 'mx_manager_id', 'food_schedule',
                  'water_temp_check', 'water_change', 'plant_care', 'schedule_notes']
        depth = 1
