from rest_framework import serializers
from .models import Tank

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class TankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tank
        fields = ['id', 'tankName', 'waterType', 'tankSize', 'waterTempChkLastDone', 'value', 'nextDue', 'waterChangeLastDone', 'amountPercent',
                  'nextDue', 'plantCareLastDone', 'nextDue', 'waterLevelsChkLastDone', 'phLevel', 'nitriteLevel', 'nitrateLevel', 'o2Level', 'nextDue', 'notes']
        depth = 1
