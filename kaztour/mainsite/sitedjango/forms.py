from .models import Comments
from django.forms import ModelForm, TextInput, Textarea


class CommentsForm(ModelForm):
    class Meta:
        model = Comments
        fields = ['comment_title', 'comment_text']

        widgets = {
            "comment_title": TextInput(attrs={
                'class': 'input',
                'placeholder': 'Ваше имя'
            }),
            "comment_text": Textarea(attrs={
                'class': 'input',
                'placeholder': 'Комментарий'
            }),
        }

