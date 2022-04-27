from django.db import models
from django.contrib.auth.models import User


class Tank(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tank_name = models.CharField(max_length=30)
    water_type = models.CharField(max_length=30)
    tank_size = models.IntegerField()
    water_temp_chk_last_done = models.CharField(max_length=30)
    value = models.CharField(max_length=30)
    next_temp_chk_due = models.CharField(max_length=30)
    water_change_last_done = models.CharField(max_length=30)
    amount_percent = models.CharField(max_length=30)
    next_water_change_due = models.CharField(max_length=30)
    plant_care_last_done = models.CharField(max_length=30)
    next_plant_chk_due = models.CharField(max_length=30)
    water_levels_chk_last_done = models.CharField(max_length=30, null=True)
    ph_level = models.CharField(max_length=30)
    nitrite_level = models.CharField(max_length=30)
    nitrate_level = models.CharField(max_length=30)
    o2_level = models.CharField(max_length=30)
    next_levels_chk_due = models.CharField(max_length=30)
    tank_notes = models.CharField(max_length=200)
