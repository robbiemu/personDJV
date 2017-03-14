from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'people', views.PersonViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]