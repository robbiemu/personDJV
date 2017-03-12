from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import obtain_jwt_token
from . import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'people', views.PersonViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', obtain_jwt_token),
]