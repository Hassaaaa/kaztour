from django.db import models
from datetime import datetime, timezone


class Comments(models.Model):
    comment_title = models.CharField('Превью коммента', max_length=255)
    comment_text = models.TextField('Сам текст')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.comment_title

    class Meta:
        verbose_name = 'Comment'
        verbose_name_plural = 'Comments'