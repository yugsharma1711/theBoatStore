from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from product.models import Product
class CustomAccountManager(BaseUserManager):

    def create_superuser(self, email, name, mobile_number, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')

        return self.create_user(email, name, mobile_number, password, **other_fields)

    def create_user(self, email, name, mobile_number, password, **other_fields):

        if not email:
            raise ValueError(_('You must provide an email address'))

        email = self.normalize_email(email)
        user = self.model(email=email, name= name,
                          mobile_number= mobile_number, **other_fields)
        user.set_password(password)
        user.save()
        return 

class Address(models.Model):
    address_line_1 = models.TextField(max_length=100, blank= True)
    address_line_2 = models.TextField(max_length= 50, blank=True)
    city = models.CharField(max_length=25, blank=True)
    state = models.CharField(max_length= 25, blank= True)
    pincode = models.CharField(max_length=25, blank=True)
    country = models.CharField(max_length=25, blank=True)
class NewUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    name = models.CharField(max_length=150, blank=True)
    mobile_number = models.CharField(max_length=10, blank=True)
    address = models.ForeignKey(Address, on_delete= models.DO_NOTHING, blank= True, null=True)
    start_date = models.DateTimeField(default=timezone.now)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = CustomAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['mobile_number', 'name']

    def __str__(self):
        return self.email
    
class Orders(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1);
    status = models.CharField(max_length=10)
    delivery_address = models.ForeignKey(Address, on_delete= models.CASCADE, blank=  True, null = True)
    order_date = models.DateTimeField(default=timezone.now)
    ordered_user = models.ForeignKey(NewUser, on_delete=models.CASCADE)
    class Meta:
        ordering = ('-order_date',)
    def __str__(self):
        return self.product.name