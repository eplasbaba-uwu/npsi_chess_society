from django.http import HttpResponse
from django.template import loader

def home(request):
  template = loader.get_template('index.html')
  return HttpResponse(template.render())

def events(request):
  template = loader.get_template('events.html')
  return HttpResponse(template.render())

def about(request):
  template = loader.get_template('about.html')
  return HttpResponse(template.render())
