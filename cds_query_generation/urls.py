

from django.conf.urls import patterns, include, url
from django.contrib import admin
from restapp import views

admin.autodiscover()
urlpatterns = patterns('',
	url(r'^(?P<batch>[0-9]+)$', views.index, name='index'),
	url(r'^admin/', include(admin.site.urls)),
	url(r'^queries/', views.QueryList.as_view()),
	url(r'^query/(?P<qId>[0-9a-zA-Z\-\_]+)/$', views.QueryDetail.as_view()),)

# url(r'^$', views.index, name='index'),