from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^resource/', include('resource.urls')),
    url(r'^admin/', admin.site.urls),
]