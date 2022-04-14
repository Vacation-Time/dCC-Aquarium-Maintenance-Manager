from django.db import models
from tank.models import Tank
# TODO: Import model for the Tank. This should be the Foreign Key model on line 6
#! REMEMBER TO CHANGE THE NAME OF THE FIELD ON LINE 7 to "tank"


class MxManager(models.Model):
    mxManagerId = models.ForeignKey(Tank, on_delete=models.CASCADE)
    foodSchedule = models.CharField(max_length=30)
    waterTempCheck = models.CharField(max_length=30)
    waterChange = models.CharField(max_length=30)
    plantCare = models.CharField(max_length=100)
    scheduleNotes = models.CharField(max_length=100)
