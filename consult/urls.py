from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    # ex: /consult/5/
    path("<int:question_id>/", views.detail, name="detail"),
    # ex: /consult/5/results/
    path("<int:question_id>/results/", views.results, name="results"),
    # ex: /consult/5/vote/
    path("<int:question_id>/vote/", views.vote, name="vote"),
]


app_name = "consult"
urlpatterns = [
    path("", views.index, name="index"),
    path("<int:question_id>/", views.detail, name="detail"),
    path("<int:question_id>/results/", views.results, name="results"),
    path("<int:question_id>/vote/", views.vote, name="vote"),
]