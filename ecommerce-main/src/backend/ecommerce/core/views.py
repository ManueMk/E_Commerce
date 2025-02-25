from rest_framework import generics
from rest_framework.exceptions import PermissionDenied
from rest_framework.parsers import FileUploadParser, MultiPartParser

from .serializers import CustomUserSerializer, ProductSerializer, AddressSerializer, CategorySerializer
from .models import CustomUser, Product, Category, Address

from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from django.utils import timezone
from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404


#################################################################################### Begin View User ###########################################################
class DetailUserView(generics.RetrieveAPIView):
    parser_classes = [FileUploadParser, MultiPartParser]
    serializer_class = CustomUserSerializer
    lookup_field = 'pk'
    permission_classes = [IsAuthenticated, ]
    queryset = CustomUser.objects.all()


class ListUsersView(generics.ListAPIView):
    parser_classes = [FileUploadParser, MultiPartParser]
    serializer_class = CustomUserSerializer
    permission_classes = [IsAdminUser, ]

    def get_queryset(self):
        return CustomUser.objects.all()


class CreateUserView(generics.CreateAPIView):
    parser_classes = [MultiPartParser]
    serializer_class = CustomUserSerializer

    permission_classes = [AllowAny, ]
    queryset = CustomUser.objects.all()

    def perform_create(self, serializer):
        serializer.save()


class UpdateUserView(generics.UpdateAPIView):
    parser_classes = [FileUploadParser, MultiPartParser]
    serializer_class = CustomUserSerializer
    permission_classes = [IsAuthenticated, ]
    lookup_field = 'pk'
    queryset = CustomUser.objects.all()

    def perform_update(self, serializer):
        user = CustomUser.objects.get(pk=self.kwargs.get('pk'))
        if user and user == self.request.user or self.request.user.is_admin:
            serializer.save()
        else:
            raise PermissionDenied()


class DeleteUserView(generics.DestroyAPIView):
    serializer_class = CustomUserSerializer
    permission_classes = [IsAuthenticated, ]
    lookup_field = 'pk'
    queryset = CustomUser.objects.all()

    def perform_destroy(self, instance):
        user = CustomUser.objects.get(pk=self.kwargs.get('pk'))
        if user and user == self.request.user or self.request.user.is_admin:
            return super().perform_destroy(instance)
        else:
            raise PermissionDenied()


#################################################################################### End View User #######################################################


#################################################################################### Begin View Product ###########################################################
class DetailProductView(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    lookup_field = 'pk'
    permission_classes = [AllowAny, ]
    queryset = Product.objects.all()


class ListAllProductView(generics.ListAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny, ]

    def get_queryset(self):
        return Product.objects.all()


class NewArrivalView(generics.ListAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny, ]

    def get_queryset(self):
        recent_products = Product.objects.all().order_by('-registration_date')[:10]

        return recent_products


class FlashDealView(generics.ListAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny, ]

    def get_queryset(self):

        flash = Product.objects.filter(price__gte = 100000 ).order_by('-registration_date')[:10]

        return flash


class CreateProductView(generics.CreateAPIView):
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated, ]
    queryset = Product.objects.all()

    #def perform_create(self, serializer):
        #serializer.save(owner=self.request.user)


class UpdateProductView(generics.UpdateAPIView):
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated, ]
    lookup_field = 'pk'
    queryset = Product.objects.all()

    def perform_update(self, serializer):

        user = Product.objects.get(pk=self.kwargs.get('pk')).owner
        if user and user == self.request.user or self.request.user.is_admin:
            serializer.save()
        else:
            raise PermissionDenied()


class GetImageView(generics.ListAPIView):
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated, ]
    lookup_field = 'pk'
    #queryset = Product.objects.all()

    def get_queryset(self):

        image = get_object_or_404(Product, pk=3)
        with open(image.image1.path, 'rb') as f:
            return HttpResponse(f.read(), content_type='image/jpeg')


class DeleteProductView(generics.DestroyAPIView):
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated, ]
    lookup_field = 'pk'
    queryset = Product.objects.all()

    def perform_destroy(self, instance):
        user = Product.objects.get(pk=self.kwargs.get('pk')).owner
        if user and user == self.request.user or self.request.user.is_admin:
            return super().perform_destroy(instance)
        else:
            raise PermissionDenied()


class GetProductByCategory(generics.ListAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny, ]
    lookup_field = 'name'

    def get_queryset(self):
        category = Category.objects.get(name__icontains=self.kwargs.get('name'))

        order = self.request.query_params.get('order', )
        if order:
            return Product.objects.all().filter(category=category).order_by(order)
        return Product.objects.all().filter(category=category)


class GetProductByUser(generics.ListAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny, ]
    lookup_field = 'email'

    def get_queryset(self):
        user = CustomUser.objects.get(email__icontains=self.kwargs.get('email'))

        order = self.request.query_params.get('order', )
        if order:
            return Product.objects.all().filter(owner=user).order_by(order)
        return Product.objects.all().filter(owner=user)


#################################################################################### End View Product #######################################################


#####################################################################  End point de gestion des categories    #############################################################################


class DetailCategoryView(generics.RetrieveAPIView):
    serializer_class = CategorySerializer
    lookup_field = 'pk'
    permission_classes = [AllowAny, ]
    queryset = Category.objects.all()


class ListAllCategoryView(generics.ListAPIView):
    serializer_class = CategorySerializer
    permission_classes = [AllowAny, ]

    def get_queryset(self):
        return Category.objects.all()


class CreateCategoryView(generics.CreateAPIView):
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated, ]
    queryset = Category.objects.all()

    def perform_create(self, serializer):
        serializer.save()


class UpdateCategoryView(generics.UpdateAPIView):
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated, ]
    lookup_field = 'pk'
    queryset = Category.objects.all()

    def perform_update(self, serializer):

        if self.request.user.is_admin:
            serializer.save()
        else:
            raise PermissionDenied()


class DeleteCategoryView(generics.DestroyAPIView):
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated, ]
    lookup_field = 'pk'
    queryset = Category.objects.all()

    def perform_destroy(self, instance):
        products = Product.objects.all().filter(category=self.kwargs.get('pk'))
        if len(products) == 0 and self.request.user.is_admin:
            return super().perform_destroy(instance)
        else:
            raise PermissionDenied()


##################################################################### Fin End point de gestion des categories    #############################################################################

##################################################################### End point de gestion des adresses    #############################################################################

class DetailAddressView(generics.RetrieveAPIView):
    serializer_class = AddressSerializer
    lookup_field = 'pk'
    permission_classes = [AllowAny, ]
    queryset = Address.objects.all()


class ListAllAddressView(generics.ListAPIView):
    serializer_class = AddressSerializer
    permission_classes = [AllowAny, ]

    def get_queryset(self):
        return Address.objects.all()


class CreateAddressView(generics.CreateAPIView):
    serializer_class = AddressSerializer
    permission_classes = [IsAuthenticated, ]
    queryset = Address.objects.all()

    def perform_create(self, serializer):
        serializer.save()


class UpdateAddressView(generics.UpdateAPIView):
    serializer_class = AddressSerializer
    permission_classes = [IsAuthenticated, ]
    lookup_field = 'pk'
    queryset = Address.objects.all()

    def perform_update(self, serializer):

        if self.request.user.is_admin:
            serializer.save()
        else:
            raise PermissionDenied()


class DeleteAddressView(generics.DestroyAPIView):
    serializer_class = AddressSerializer
    permission_classes = [IsAuthenticated, ]
    lookup_field = 'pk'
    queryset = Address.objects.all()

    def perform_destroy(self, instance):
        address = Address.objects.get(pk=self.kwargs.get('pk'))
        if not address.user and self.request.user.is_admin:
            return super().perform_destroy(instance)
        else:
            raise PermissionDenied()

##################################################################### Fin End point de gestion des adresses    #############################################################################
