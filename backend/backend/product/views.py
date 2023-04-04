from django.shortcuts import render
from product.models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

class AddProduct(generics.CreateAPIView):
    permission_classes = [AllowAny]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    def post(self, request):
        serializer = ProductSerializer(data = self.request.data)
        if serializer.is_valid(raise_exception=True):       
            serializer.save()
        return Response(serializer.data)

class ProductList(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer    
class GetSingleProduct(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CreateCategory(generics.CreateAPIView):
    permission_classes = [AllowAny]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    def post(self, request):
        serializer = CategorySerializer(data = self.request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(serializer.data)
    
class FetchByCategory(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    def get_queryset(self):
        my_param = self.request.query_params.get('my_param', None)
        if my_param is not None:
            queryset = self.queryset.filter(category=int(my_param))
        else:
            queryset = self.queryset.all()    
        return queryset
