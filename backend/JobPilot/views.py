from django.shortcuts import render
from .models import CreateJob
from .serializers import CreateJobSerializer
from rest_framework import viewsets

class CreateJobView(viewsets.ModelViewSet):
    queryset = CreateJob.objects.all()
    serializer_class = CreateJobSerializer
