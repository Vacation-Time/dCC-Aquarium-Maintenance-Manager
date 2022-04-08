from django.db import models
from django.contrib.auth.models import User


class MxManager(models.Model):
    mxManagerId = models.ForeignKey(User, on_delete=models.CASCADE)
    foodSchedule = models.CharField(max_length=30)
    waterTempCheck = models.CharField(max_length=30)
    waterChange = models.CharField(max_length=30)
    plantCare = models.CharField(max_length=100)
    scheduleNotes = models.CharField(max_length=100)
