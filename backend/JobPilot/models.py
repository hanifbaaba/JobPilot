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
      
class ApplyJob(models.Model):
      name = models.CharField(max_length=200)
      reason_for_applying = models.TextField()
      country_of_residence = models.CharField(max_length=200)
      resume_upload = models.ImageField(upload_to='CV/', blank=True, null=True)
      portfolio_link = models.URLField(max_length=355)