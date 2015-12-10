from django.db import models

# Create your models here.
class Query(models.Model):
	qId = models.CharField(max_length=250)
	image = models.TextField(blank=True, null=True)
	queryType = models.CharField(max_length=250)

	def __str__(self):
		return self.qId


	class Meta:
		app_label = 'restapp'

class Keywords(models.Model):
	query = models.ForeignKey(Query)

	person = models.CharField(max_length=250)
	order = models.IntegerField()
	keywords = models.CharField(max_length=250)

	class Meta:
		unique_together = ('query', 'person', 'order')


	def __unicode__(self):
		return '%s, %s: %s' % (self.query, self.person, self.keywords)
