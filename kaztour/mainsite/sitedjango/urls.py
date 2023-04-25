from django.urls import path
from . import views

urlpatterns = [
    path('', views.main_home, name='main_home'),
    path('about_author', views.about_home, name='about_author'),
    path('about_guests', views.guest_home, name='about_guests'),
    path('create_comment', views.create_comment, name='create_comment'),
    path('<int:pk>', views.CommentDetailView.as_view(), name='main_detail'),
    path('<int:pk>/update', views.CommentUpdateView.as_view(), name='main_update'),
    path('<int:pk>/delete', views.CommentDeleteView.as_view(), name='main_delete'),
]