# Generated by Django 4.0.3 on 2022-04-21 20:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Tank',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tankName', models.CharField(max_length=30)),
                ('waterType', models.CharField(max_length=30)),
                ('tankSize', models.IntegerField()),
                ('waterTempChkLastDone', models.CharField(max_length=30)),
                ('value', models.CharField(max_length=30)),
                ('waterChangeLastDone', models.CharField(max_length=30)),
                ('amountPercent', models.CharField(max_length=30)),
                ('plantCareLastDone', models.CharField(max_length=30)),
                ('waterLevelsChkLastDone', models.CharField(max_length=30)),
                ('phLevel', models.CharField(max_length=30)),
                ('nitriteLevel', models.CharField(max_length=30)),
                ('nitrateLevel', models.CharField(max_length=30)),
                ('o2Level', models.CharField(max_length=30)),
                ('nextDue', models.CharField(max_length=30)),
                ('notes', models.CharField(max_length=200)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
