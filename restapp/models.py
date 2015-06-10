from django.db import models

# Create your models here.
class Query(models.Model):
	qId = models.CharField(max_length=250)
	keywords = models.TextField(blank=True, null=True)


	class Meta:
		app_label = 'restapp'