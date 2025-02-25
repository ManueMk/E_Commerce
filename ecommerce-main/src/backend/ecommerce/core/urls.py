from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import (CreateUserView, ListUsersView, DetailUserView, UpdateUserView, GetImageView,
                    DeleteUserView, CreateProductView, DetailProductView, NewArrivalView, FlashDealView,
                    UpdateProductView, DeleteProductView, ListAllProductView, GetProductByCategory, ListAllCategoryView,
                    UpdateCategoryView, DeleteCategoryView, DetailCategoryView, CreateCategoryView, CreateAddressView,
                    ListAllAddressView, DetailAddressView, UpdateAddressView, DeleteAddressView,GetProductByUser)


from django.conf.urls.static import static
from ecommerce import settings



urlpatterns = [

    ### Home
    path('flash/deal', FlashDealView.as_view(), name='flash/deal'),
    path('newsarrival', NewArrivalView.as_view(), name='newsarrival'),

    ### user

    path('user/create', CreateUserView.as_view(), name='create-user'),
    path('user/list', ListUsersView.as_view(), name='list-user'),
    path('user/<int:pk>/detail', DetailUserView.as_view(), name='detail-user'),
    path('user/<int:pk>/update', UpdateUserView.as_view(), name='update-user'),
    path('user/<int:pk>/delete', DeleteUserView.as_view(), name='delete-user'),

    #### product

    path('product/create', CreateProductView.as_view(), name='create-product'),
    path('product/list/all', ListAllProductView.as_view(), name='list-all-product'),
    path('product/<int:pk>/detail', DetailProductView.as_view(), name='detail-product'),
    path('product/<int:pk>/update', UpdateProductView.as_view(), name='update-product'),
    path('product/<int:pk>/delete', DeleteProductView.as_view(), name='delete-product'),
    path('product/category/<str:name>', GetProductByCategory.as_view(), name='product-category'),
    path('product/user/<str:email>', GetProductByUser.as_view(), name='product-user'),

    #### category

    path('category/create', CreateCategoryView.as_view(), name='create-category'),
    path('category/list/all', ListAllCategoryView.as_view(), name='list-all-category'),
    path('category/<int:pk>/detail', DetailCategoryView.as_view(), name='detail-category'),
    path('category/<int:pk>/update', UpdateCategoryView.as_view(), name='update-category'),
    path('category/<int:pk>/delete', DeleteCategoryView.as_view(), name='delete-category'),

    #### addresss

    path('address/create', CreateAddressView.as_view(), name='create-address'),
    path('address/list/all', ListAllAddressView.as_view(), name='list-all-address'),
    path('address/<int:pk>/detail', DetailAddressView.as_view(), name='detail-address'),
    path('address/<int:pk>/update', UpdateAddressView.as_view(), name='update-address'),
    path('address/<int:pk>/delete', DeleteAddressView.as_view(), name='delete-address'),

    path('image/<int:pk>/', GetImageView.as_view(), name='image_view'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

