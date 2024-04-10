# api/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.CompanyListAPIView.as_view(), name='company-list'),
    path('companies/<int:id>/', views.CompanyDetailAPIView.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', views.CompanyVacancyListAPIView.as_view(), name='company-vacancy-list'),
    path('vacancies/', views.VacancyListAPIView.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', views.VacancyDetailAPIView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', views.TopTenVacancyListAPIView.as_view(), name='top-ten-vacancies'),
]
