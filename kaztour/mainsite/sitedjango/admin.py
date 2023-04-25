from django.contrib import admin
from .models import Comments


class CommentsAdmin(admin.ModelAdmin):
    list_display = ('comment_title', 'comment_text', 'created_at')


admin.site.register(Comments, CommentsAdmin)
