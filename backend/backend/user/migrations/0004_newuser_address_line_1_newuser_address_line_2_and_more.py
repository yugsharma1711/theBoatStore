# Generated by Django 4.1.5 on 2023-03-22 05:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_orders'),
    ]

    operations = [
        migrations.AddField(
            model_name='newuser',
            name='address_line_1',
            field=models.TextField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='newuser',
            name='address_line_2',
            field=models.TextField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='newuser',
            name='city',
            field=models.TextField(blank=True, max_length=25),
        ),
        migrations.AddField(
            model_name='newuser',
            name='country',
            field=models.TextField(blank=True, max_length=25),
        ),
        migrations.AddField(
            model_name='newuser',
            name='pincode',
            field=models.TextField(blank=True, max_length=25),
        ),
        migrations.AddField(
            model_name='newuser',
            name='state',
            field=models.TextField(blank=True, max_length=25),
        ),
    ]