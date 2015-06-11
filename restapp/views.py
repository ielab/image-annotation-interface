from django.utils import timezone

from restapp.models import *

from django.shortcuts import render
from django.http import Http404
from django.template import Context, loader, RequestContext
from django.http import HttpResponse, HttpResponseRedirect

from restapp.serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

def index(request, batch):
	template = loader.get_template('restapp/index.html')
	context = Context({
		'batch': int(batch),
	})
	return HttpResponse(template.render(context))

class QueryList(APIView):
	"""
	List all queries, or create a new query.
	"""
	def get(self, request, format=None):
		queries = Query.objects.all()
		serializer = QuerySerializer(queries, many=True)
		return Response(serializer.data)

	def post(self, request, format=None):
		serializer = QuerySerializer(data=request.DATA)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request, pk, format=None):
		query = self.get_object(pk)
		query.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)



class QueryDetail(APIView):
	"""
	Retrieve, update or delete a query instance.
	"""
	def get_object(self, qId):
		try:
			return Query.objects.get(qId=qId)
		except Query.DoesNotExist:
			raise Http404

	def get(self, request, qId, format=None):
		query = Query.objects.get(qId=qId)
		query = QuerySerializer(query)
		return Response(query.data)

	def put(self, request, qId, format=None):
		query = Query.objects.get(qId=qId)
		serializer = QuerySerializer(query, data=request.DATA)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		print serializer.errors
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request, qId, format=None):
		query = Query.objects.get(qId=qId)
		query.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)


class KeywordDetail(APIView):
	"""
	Retrieve, update or delete a query instance.
	"""
	# def get_object(self, qId):
	# 	try:
	# 		return Query.objects.get(qId=qId)
	# 	except Query.DoesNotExist:
	# 		raise Http404

	def get(self, request, qId, person, order, format=None):
		query = Query.objects.get(qId=qId)
		keyword = Keywords.objects.get(query=query, person=person, order=order)
		keywordSerializer = KeywordSerializer(keyword)
		return Response(keywordSerializer.data)

	def put(self, request, qId, person, order, format=None):
		query = Query.objects.get(qId=qId)
		keyword = Keywords(query=query, person=person, order=order)
		keyword.save()
		serializer = KeywordSerializer(keyword, data=request.DATA)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request, qId, format=None):
		query = Query.objects.get(qId=qId)
		query.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)