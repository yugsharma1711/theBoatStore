from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import RegisterUserSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import generics
from .models import Orders
from .serializers import OrderSerializer
from .serializers import AddressSerializer
from .models import NewUser
from .models import Address
class CustomUserClass(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        reg_serializer = RegisterUserSerializer(data = request.data)
        if reg_serializer.is_valid():
            newuser = reg_serializer.save()
            if newuser:
                return Response(status= status.HTTP_201_CREATED)
        return Response(reg_serializer.errors, status= status.HTTP_400_BAD_REQUEST)

class OrderPlacement(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Orders.objects.all()
    serializer_class = OrderSerializer
    def post(self, request):
        data = self.request.data
        user = self.request.user
        serializer = OrderSerializer(data = data)
        if serializer.is_valid(raise_exception= True):
            serializer.save(user)
        return Response(serializer.data)

class GetOrder(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = OrderSerializer
    queryset = Orders.objects.all()
    def get_queryset(self):
        user = self.request.user
        if user is not None:
            queryset = self.queryset.filter(ordered_user = user.id)
        else:
            queryset = self.queryset.all()
        return queryset
class GetUser(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = RegisterUserSerializer
    queryset = NewUser.objects.all()
    def get_queryset(self):
        user = self.request.user
        print(user.id)
        if user is not None:
            queryset = self.queryset.filter(id = user.id)
        else:
            queryset = self.queryset.all()    
        return queryset

class Testing(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = RegisterUserSerializer
    queryset = NewUser.objects.all()

class GetAddress(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = AddressSerializer
    queryset = Address.objects.all()
    
class setAddress(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = AddressSerializer
    queryset = Address.objects.all()

    def post(self, request):
        data = self.request.data
        serializer = AddressSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            address = serializer.save()
            response_data = {
                "id": address.id,
                "message": "Address created successfully"
            }
            return Response(response_data, status=201)
        else:
            return Response(serializer.errors, status=400)