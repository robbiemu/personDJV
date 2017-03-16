personDJV
-----

This is a demo django/vuejs app with a postgresql backend. It has basic user permissions and a database of person data that you can view add or edit with credentials.

see the demo: https://persondjv-vue.herokuapp.com

Once there, be sure to check out some of the features:

* spa routing on the sidebar
* responsive material design
* login and registration (no oauth implementation)
* person data is editable if owned by user signed in
* person data can be created with credentials

The person data cards have random images assigned to them, but there is no association between the data and the images.

Todo -

* there is a slight feature bug in that the route redirect happens before the submission
is complete. This could be solved in an ideal way with async/await, but the scaffolding I was using comes with buble for speed instead of babel, and there is no async/await support. Renavigating to the people page after a submission will show the new record. I had to rewrite other sections from async/await to promise chains. this one crosses components though, and I am waiting to see if buble will be dropped from the scaffolding: I am an active participant with vuetify and in contact with the lead developer.

## prereqs
_built on a Windows 10 system with remote PostgreSQL using:_

* python 3.6
* django
* djangorestframework
* djangorestframework-jwt
* corsheaders
* _postgres connector_

using vuetify/webpack for the front end (vue2 / vuex2 with a nice modern gui component library)