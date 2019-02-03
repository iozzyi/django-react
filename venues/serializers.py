from rest_framework import serializers

from venues.models import Address


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('building_unit', 'building_name', 'street_number', 'street_name', 'postcode')