from django.db import models
from django.contrib.auth.models import User


class Tank(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tankName = models.CharField(max_length=30)
    waterType = models.CharField(max_length=30)
    tankSize = models.IntegerField()
    fishType = models.CharField(max_length=100)
    fishAmount = models.IntegerField()
    plantType = models.CharField(max_length=100)
    plantAmount = models.IntegerField()
