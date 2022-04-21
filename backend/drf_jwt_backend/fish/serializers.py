from rest_framework import serializers
from .models import Fish

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class FishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fish
        fields = ['id', 'tank_id', 'fish_type', 'fish_amount', 'notes']
        depth = 1
