from rest_framework import serializers

from .models import Product, Category

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id','name', 'category','description', 'buying_price', 'image', 'discount', 'selling_price')
    def save(self):
        name = self.validated_data['name']
        description = self.validated_data['description']
        category = self.validated_data['category']
        buying_price = self.validated_data['buying_price']
        image = self.validated_data['image']
        discount = self.validated_data['discount']
        selling_price = buying_price - buying_price * discount / 100
        final = Product.objects.create(name = name,category = category, image = image, description=  description, 
                                    buying_price = buying_price, discount = discount, selling_price = selling_price)
        return final 
    
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name',)
    def save(self):
        name = self.validated_data['name']
        final = Category.objects.create(name = name)
        return final