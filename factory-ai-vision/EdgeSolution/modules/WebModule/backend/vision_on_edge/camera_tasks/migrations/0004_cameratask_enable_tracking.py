# Generated by Django 3.0.8 on 2020-11-10 10:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("camera_tasks", "0003_cameratask_recording_duration"),
    ]

    operations = [
        migrations.AddField(
            model_name="cameratask",
            name="enable_tracking",
            field=models.BooleanField(default=False),
        ),
    ]
