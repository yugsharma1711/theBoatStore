
from .views import CustomUserClass, OrderPlacement, GetUser, Testing, GetOrder,GetAddress, setAddress
from django.urls import path

urlpatterns = [
    path('register/',CustomUserClass.as_view(), name = 'create_user'),
    path('placeorder/', OrderPlacement.as_view()),
    path('getOrder/', GetOrder.as_view()),
    path('getUser/', GetUser.as_view()),
    path('testing/', Testing.as_view()),
    path('getAddress/<int:pk>', GetAddress.as_view()),
    path('setAddress/', setAddress.as_view()),
]