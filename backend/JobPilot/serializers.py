from rest_framework import serializers 
from .models import CreateJob, ApplyJob
class CreateJobSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreateJob
        fields = ['id','job_title','description','salary','company_name', 'location','category']

class ApplyJobSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplyJob
        fields = ['job','name','reason_for_applying','country_of_residence','resume_upload','portfolio_link','preferred_salary']
        