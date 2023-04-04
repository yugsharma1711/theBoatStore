from rest_framework import serializers
from user.models import NewUser, Orders, Address

class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ('email','name', 'mobile_number','address', 'password')
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = ('product', 'status', 'delivery_address', 'order_date')
    def save(self, user):
        product = self.validated_data['product']
        status = self.validated_data['status']
        delivery_address = self.validated_data['delivery_address']
        ordered_user = user
        final = Orders.objects.create(product = product ,status = status, delivery_address = delivery_address, 
                                    ordered_user = ordered_user)
        return final
    
class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('id','address_line_1', 'address_line_2', 'city', 'state', 'pincode', 'country')
    def save(self):
        address_line_1 = self.validated_data['address_line_1']
        address_line_2 = self.validated_data['address_line_2']
        city = self.validated_data['city']
        state = self.validated_data['state']
        pincode = self.validated_data['pincode']
        country = self.validated_data['country']
        final = Address.objects.create(address_line_1 = address_line_1, address_line_2 = address_line_2, 
                                    city = city, state = state, pincode = pincode, country= country)
        return final