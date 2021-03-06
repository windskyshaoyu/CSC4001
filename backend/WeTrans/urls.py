"""WeTrans URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
import xadmin
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
#
from backend import views

urlpatterns = [
    path('xadmin/', xadmin.site.urls),
    path('', TemplateView.as_view(template_name="index.html")),
    path('getOneJob/', views.getOneJob),
    path('postOneJob/', views.postOneJob),
    path('getAllJobs/', views.getAllJobs),
    path('cancelOneJob/',views.cancelOneJob),
    path('completeOneJob/',views.completeOneJob),


    path('createAnOrder/', views.createAnOrder),
    path('getAllOrders/',views.getAllOrders),
    path('getPostedOrders/',views.getPostedOrders),
    path('takeOneOrder/',views.takeOneOrder),
    path('completeOneOrder/',views.completeOneOrder),
    path('cancelOneOrder/',views.cancelOneOrder),

    path('checkTranslatedText/',views.checkTranslatedText),


    path('login/', views.login),
    path('registerUser/', views.registerOneUser),
    path('updateUserInfo/', views.updateUserInfo),



    path('getAllUserInfo/', views.getAllUserInfo),

    path('getUserBalance/', views.getUserBalance)


]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
