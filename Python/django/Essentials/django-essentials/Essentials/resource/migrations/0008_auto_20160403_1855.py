# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-04-04 01:55
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('resource', '0007_auto_20160403_1854'),
    ]

    operations = [
        migrations.AlterField(
            model_name='model',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2016, 4, 4, 1, 55, 35, 916592, tzinfo=utc), verbose_name='date published'),
        ),
    ]