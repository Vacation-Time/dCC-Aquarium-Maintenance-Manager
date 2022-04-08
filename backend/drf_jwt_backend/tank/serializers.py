from rest_framework import serializers
from .models import Tank

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class TankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tank
        fields = ['id', 'user_id', 'tankName', 'waterType', 'tankSize',
                  'fishType', 'fishAmount', 'plantType', 'plantAmount']
        depth = 1
