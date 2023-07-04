from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('chess_soc.urls')),
    path('admin/', admin.site.urls),
]