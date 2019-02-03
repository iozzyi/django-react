from django.db import models

from hoop.base import HoopBaseModel


class Address(HoopBaseModel):
    building_unit = models.CharField(max_length=1024, null=True, blank=True)
    building_name = models.CharField(max_length=1024, null=True, blank=True)
    street_number = models.CharField(max_length=32)
    street_name = models.CharField(max_length=1024)
    town = models.CharField(max_length=1024)
    postcode = models.CharField(max_length=8)