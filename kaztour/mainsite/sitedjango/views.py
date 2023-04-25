from django.shortcuts import render, redirect
from .models import Comments
from .forms import CommentsForm
from . import views
from django.views.generic import DetailView, UpdateView, DeleteView


def main_home(request):
    comment = Comments.objects.all().order_by('-created_at').values()
    return render(request, 'sitedjango/main_home.html', {'comment': comment})


def about_home(request):
    return render(request, 'sitedjango/about_author.html')


def guest_home(request):
    return render(request, 'sitedjango/guests.html')

def create_comment(request):
    error = ''
    if request.method == 'POST':
        form = CommentsForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('main_home')
        else:
            error = 'Что то не так...'

    form = CommentsForm()

    data = {
        'form': form
    }

    return render(request, 'sitedjango/create_comment.html', data)


class CommentDetailView(DetailView):
    model = Comments
    template_name = 'sitedjango/details_view_main.html'
    context_object_name = 'comment'


class CommentUpdateView(UpdateView):
    model = Comments
    template_name = 'sitedjango/create_comment.html'
    form_class = CommentsForm
    success_url = '/sitedjango/'


class CommentDeleteView(DeleteView):
    model = Comments
    success_url = '/second/'
    template_name = 'sitedjango/main_delete.html'