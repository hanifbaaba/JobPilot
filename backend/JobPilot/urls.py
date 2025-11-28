from .views import CreateJobView
from django.urls import path
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'create-job', CreateJobView, basename="create-job")
urlpatterns = router.urls

