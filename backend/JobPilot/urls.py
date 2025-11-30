from .views import CreateJobView, ApplyJobView
from django.urls import path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'create-job', CreateJobView, basename="create-job")
router.register(r'apply-job', ApplyJobView, basename='apply-job')
urlpatterns = router.urls

# urlpatterns= [
#     path("apply-job", ApplyJobView.as_view(), name="apply-job")
    
# ]
