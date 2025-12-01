from django.shortcuts import render
from .models import CreateJob, ApplyJob
from .serializers import CreateJobSerializer,ApplyJobSerializer
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.pagination import PageNumberPagination
from django.core.mail import send_mail


class CreateJobView(viewsets.ModelViewSet):
    queryset = CreateJob.objects.all()
    serializer_class = CreateJobSerializer
    permission_classes = [AllowAny]
    search_fields = ['job_title', 'description', 'location', 'category', 'company_name']
    filter_backends = [DjangoFilterBackend, SearchFilter,OrderingFilter]
    filterset_fields = [ 'salary']

    def get_queryset(self):
        return CreateJob.objects.filter(salary__gte = 50000, salary__lte =500000)

class ApplyJobView(viewsets.ModelViewSet):
    queryset = ApplyJob.objects.all()
    serializer_class = ApplyJobSerializer
    permission_classes = [AllowAny]
    pagination_class = PageNumberPagination
    
    def perform_create(self, serializer):
        application = serializer.save()
        send_mail(
        subject="Application received",
        message="Thanks for applying.",
        from_email="baabahanif@gmail.com",
        recipient_list=[application.email],
        fail_silently=False,
        )
