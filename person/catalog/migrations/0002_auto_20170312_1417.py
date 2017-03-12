from __future__ import unicode_literals
from django.db import migrations
from django.utils.dateparse import parse_datetime
from django.conf import settings

def create_initial_people(apps, schema_editor):
    Person = apps.get_model('catalog', 'Person')
    User = apps.get_model(settings.AUTH_USER_MODEL)
    du = User.objects.get(id=1)

    person_a = Person(person_firstname='Art', person_lastname='Bart', owner=du,
                      person_dob=parse_datetime('2016-01-01'), person_zip='20000')
    person_a.save()
    person_b = Person(person_firstname='Bart', person_lastname='Cart', owner=du,
                      person_dob=parse_datetime('2015-05-01'), person_zip='20005')
    person_b.save()
    person_c = Person(person_firstname='Carl', person_lastname='Dart', owner=du,
                      person_dob=parse_datetime('2014-01-04'), person_zip='24000')
    person_c.save()
    person_d = Person(person_firstname='Dirk', person_lastname='Eart', owner=du,
                      person_dob=parse_datetime('2013-02-02'), person_zip='22200')
    person_d.save()
    person_e = Person(person_firstname='Earl', person_lastname='Fart', owner=du,
                      person_dob=parse_datetime('2012-03-02'), person_zip='23020')
    person_e.save()
    person_f = Person(person_firstname='Felix', person_lastname='Gart', owner=du,
                      person_dob=parse_datetime('2011-02-03'), person_zip='20230')
    person_f.save()
    person_g = Person(person_firstname='Garth', person_lastname='Hart', owner=du,
                      person_dob=parse_datetime('2010-10-11'), person_zip='21011')
    person_g.save()
    person_h = Person(person_firstname='Harold', person_lastname='Iart', owner=du,
                      person_dob=parse_datetime('2009-12-31'), person_zip='21231')
    person_h.save()

class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_initial_people),
    ]