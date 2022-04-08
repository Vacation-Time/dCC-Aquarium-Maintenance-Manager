from rest_framework import serializers
from .models import MxManager

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class MxManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = MxManager
        fields = ['id', 'mxManagerId', 'foodSchedule',
                  'waterTempCheck', 'waterChange', 'plantCare', 'scheduleNotes']
        depth = 1
