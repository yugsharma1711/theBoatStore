# Generated by Django 4.1.5 on 2023-03-28 05:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0010_remove_orders_delivery_address'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='newuser',
            name='address',
        ),
        migrations.AddField(
            model_name='orders',
            name='delivery_address',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='user.address'),
        ),
    ]
