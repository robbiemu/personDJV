from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet)

urlpatterns = [
    url(r'^people/$', views.people_list),
    url(r'^', include(router.urls)),
]