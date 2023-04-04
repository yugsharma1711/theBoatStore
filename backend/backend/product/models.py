from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)
    class Meta:
        ordering = ('name',)
    def __str__(self) -> str:
        return self.name
    
class Product(models.Model):
    category = models.ForeignKey(Category, on_delete= models.CASCADE, default= 1)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    buying_price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to='uploads/', blank= True, null=True)
    date_added = models.DateTimeField(auto_now_add=True)
    selling_price = models.DecimalField(max_digits=6, decimal_places=2,default=0)
    discount = models.IntegerField(null=True)
    class Meta:
        ordering = ('-date_added',)
    def __str__(self) -> str:
        return self.name
    def get_image(self):
        if self.image:
            return 'http://127.0.0.1:8000/' + self.image.url
