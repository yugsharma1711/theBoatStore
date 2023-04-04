from django.urls import path
from .views import ProductList, AddProduct, GetSingleProduct, CreateCategory,FetchByCategory
urlpatterns = [
    path('addCategory', CreateCategory.as_view()),
    path('addProduct/', AddProduct.as_view()),
    path('getallproducts/', ProductList.as_view()),
    path('getSingleProduct/<int:pk>/', GetSingleProduct.as_view()),
    path('fetchByCategory/', FetchByCategory.as_view())
]