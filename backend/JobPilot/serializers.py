from rest_framework import serializers 
from .models import CreateJob

class CreateJobSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreateJob
        fields = ['job_title','description','salary','company_name', 'location','category']
