# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-04-24 23:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('joins', '0002_join_ip_address'),
    ]

    operations = [
        migrations.AlterField(
            model_name='join',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
    ]
