from django.conf.urls import url, include, patterns

from wiki.urls import get_pattern as get_wiki_pattern
# from wiki.urls import include
from django_nyt.urls import get_pattern as get_nyt_pattern

from . import views

app_name = 'resource'
urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name='index'),
    url(r'^(?P<pk>[0-9]+)/$', views.DetailView.as_view(), name='detail'),
    url(r'^(?P<pk>[0-9]+)/results/$', views.ResultsView.as_view(), name='results'),
    url(r'^(?P<question_id>[0-9]+)/vote/$', views.vote, name='vote'),
    # url(r'^wiki/', include('wiki.urls'), namespace='wiki'),
]

urlpatterns += [
    url(r'^notifications/', get_nyt_pattern()),
    url(r'^wiki', get_wiki_pattern())
]