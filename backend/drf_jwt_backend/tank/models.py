from django.db import models
from django.contrib.auth.models import User


class Tank(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tankName = models.CharField(max_length=30)
    waterType = models.CharField(max_length=30)
    tankSize = models.IntegerField()
    waterTempChkLastDone = models.CharField(max_length=30)
    value = models.CharField(max_length=30)
    nextDue = models.CharField(max_length=30)
    waterChangeLastDone = models.CharField(max_length=30)
    amountPercent = models.CharField(max_length=30)
    nextDue = models.CharField(max_length=30)
    plantCareLastDone = models.CharField(max_length=30)
    nextDue = models.CharField(max_length=30)
    waterLevelsChkLastDone = models.CharField(max_length=30)
    phLevel = models.CharField(max_length=30)
    nitriteLevel = models.CharField(max_length=30)
    nitrateLevel = models.CharField(max_length=30)
    o2Level = models.CharField(max_length=30)
    nextDue = models.CharField(max_length=30)
    notes = models.CharField(max_length=200)
