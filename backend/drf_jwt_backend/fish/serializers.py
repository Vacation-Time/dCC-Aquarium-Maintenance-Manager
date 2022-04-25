from rest_framework import serializers
from .models import Fish
# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class FishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fish
        fields = ['id', 'tankName', 'fishType', 'fishAmount', 'notes']
        depth = 1
