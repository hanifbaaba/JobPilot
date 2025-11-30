from django.shortcuts import render
from .models import CreateJob, ApplyJob
from .serializers import CreateJobSerializer,ApplyJobSerializer
from rest_framework import viewsets
from rest_framework.permissions import AllowAny


class CreateJobView(viewsets.ModelViewSet):
    queryset = CreateJob.objects.all()
    serializer_class = CreateJobSerializer
    permission_classes = [AllowAny]
    search_fields = ['job_title', 'description', 'location', 'category', 'company_name']

class ApplyJobView(viewsets.ModelViewSet):
    queryset = ApplyJob.objects.all()
    serializer_class = ApplyJobSerializer
    permission_classes = [AllowAny]
    