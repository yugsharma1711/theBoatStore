from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from . import settings
from rest_framework_simplejwt.views import(
    TokenObtainPairView,
    TokenRefreshView
)
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls


urlpatterns = [ 
    path('admin/', admin.site.urls),
    path('login/', TokenObtainPairView.as_view(), name = 'token_obtain_pair'),
    path('tokenView/refresh/', TokenRefreshView.as_view(), name = 'token_refresh'),
    path('user/', include('user.urls')),
    path('products/', include('product.urls')),
    path('docs/', include_docs_urls(title='Todo Api')),
    path('documentation/', get_schema_view(title="Documentation", description="OPEN_API", version="1.0.0")),
    path('',include_docs_urls(title='Documentation'))   
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
