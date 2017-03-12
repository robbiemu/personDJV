from django.http import HttpResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer
from .models import Person
from .serializers import PersonSerializer
 
class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)
 
 
def people_list(request):
    if request.method == 'GET':
        people = Person.objects.all()
        serializer = PersonSerializer(people, many=True)
        return JSONResponse(serializer.data)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer