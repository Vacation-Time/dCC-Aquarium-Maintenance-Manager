from django.db import models
from django.contrib.auth.models import User
from tank.models import Tank


class Fish(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tank_name = models.CharField(max_length=30)
    fish_type = models.CharField(max_length=30)
    fish_amount = models.CharField(max_length=30)
    fish_notes = models.CharField(max_length=200)
