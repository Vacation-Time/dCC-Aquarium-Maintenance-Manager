# Generated by Django 4.0.3 on 2022-04-13 20:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tank', '0001_initial'),
        ('tank_mx_manager', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mxmanager',
            name='mxManagerId',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tank.tank'),
        ),
    ]
