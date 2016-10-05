from django.contrib import admin

from .models import Make, Model, Question, Choice

# Register your models here.

class ChoiceInline(admin.TabularInline):
	model = Choice
	extra = 3


class QuestionAdmin(admin.ModelAdmin):
	fieldsets = [
		(None, 				 {'fields': [ 'question_text' ]}),
		('Date information', {'fields': ['pub_date'], 'classes': ['collapse']}),
	]
	inlines = [ChoiceInline]
	list_display = ('question_text', 'pub_date', 'was_published_recently')
	list_filter = ['pub_date']
	search_fields = ['question_text']


class ModelInline(admin.TabularInline):
	model = Model
	extra = 2


class MakeAdmin(admin.ModelAdmin):
	fieldsets = [
		(None, {'fields': [ 'make_name' ]}),
		('Date information', {'fields': ['pub_date'], 'classes': ['collapse']}),
	]
	inlines = [ModelInline]
	list_display = ('make_name', 'pub_date')
	# list_filter = ['make_name']
	search_fields = ['make_name']

admin.site.register(Question, QuestionAdmin)
admin.site.register(Make, MakeAdmin)
admin.site.register(Model)
# admin.site.register(Question)
# admin.site.register(Choice)