from django.db import models

class CreateJob(models.Model):
      job_title = models.CharField(max_length=100)
      description = models.TextField()
      salary = models.DecimalField(max_digits=10, decimal_places=2)
      company_name = models.CharField(max_length=100)
      location = models.CharField(max_length=100)
      category = models.CharField(max_length=100)
      created_at = models.DateTimeField(auto_now_add=True)
      updated_at = models.DateTimeField(auto_now=True)
      