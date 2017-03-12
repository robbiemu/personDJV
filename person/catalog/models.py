from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User

class Person(models.Model):
    person_firstname = models.CharField(max_length=64)
    person_lastname = models.CharField(max_length=64)
    person_dob = models.DateTimeField(auto_now_add=True)
    person_zip = models.CharField(max_length=16)
    owner = models.ForeignKey(User, null=True, related_name="people")