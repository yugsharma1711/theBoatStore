from django.contrib import admin
from .models import NewUser, Orders, Address
# Register your models here.
admin.site.register(NewUser)
admin.site.register(Orders)
admin.site.register(Address)