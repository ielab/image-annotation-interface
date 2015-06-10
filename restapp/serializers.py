from restapp.models import *

from rest_framework import serializers

class QuerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Query
        fields = ('qId', 'keywords')