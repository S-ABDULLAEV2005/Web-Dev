# api/urls.py

from django.urls import path
from .views import company_view, vacancy_view

urlpatterns = [
    path('companies/', company_view.company_list, name='company-list'),
    path('companies/<int:pk>/', company_view.company_detail, name='company-detail'),
    path('companies/<int:pk>/vacancies/', company_view.company_detail, name='company-vacancy-list'),
    path('vacancies/', vacancy_view.VacancyList.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', vacancy_view.VacancyDetail.as_view(), name='vacancy-detail'),
     path('vacancies/top_ten/', vacancy_view.TopTenVacancyListAPIView.as_view(), name='top-ten-vacancies'),  # Update this line
]