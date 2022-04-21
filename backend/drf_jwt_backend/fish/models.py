from django.db import models
from django.contrib.auth.models import User
from tank.models import Tank


class Fish(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tankId = models.ForeignKey(Tank, on_delete=models.CASCADE)
    fishType = models.CharField(max_length=30)
    fishAmount = models.CharField(max_length=30)
    notes = models.CharField(max_length=200)
