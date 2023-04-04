# Generated by Django 4.1.5 on 2023-03-27 13:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0006_remove_newuser_address_line_1_and_more'),
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
