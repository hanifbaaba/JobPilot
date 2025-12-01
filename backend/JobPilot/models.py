from django.db import models
# from django.contrib.auth.models import AbstractUser

class CreateJob(models.Model):
      # user = models.ForeignKey(AbstractUser, on_delete=models.CASCADE, related_name='user')
      job_title = models.CharField(max_length=100)
      description = models.TextField()
      salary = models.DecimalField(max_digits=10, decimal_places=2)
      company_name = models.CharField(max_length=100)
      location = models.CharField(max_length=100)
      category = models.CharField(max_length=100)
      experience = models.CharField(max_length=200, default='experience')
      created_at = models.DateTimeField(auto_now_add=True)
      updated_at = models.DateTimeField(auto_now=True)
      
      def __str__(self):
            return self.job_title
      
class ApplyJob(models.Model):
      # user = models.ForeignKey(AbstractUser, on_delete=models.CASCADE, related_name='user')
      job = models.ForeignKey(CreateJob,on_delete=models.CASCADE,related_name='job', blank = True, null=True)
      name = models.CharField(max_length=200)
      email = models.EmailField()
      reason_for_applying = models.TextField()
      country_of_residence = models.CharField(max_length=200)
      resume_upload = models.ImageField(upload_to='CV/', blank=True, null=True)
      portfolio_link = models.URLField(max_length=355)
      preferred_salary = models.TextField(max_length=100)