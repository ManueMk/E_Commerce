from rest_framework import serializers
from rest_framework.serializers import Serializer, ModelSerializer, ValidationError
from .models import Address, Category, Product, CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    profile = serializers.ImageField(required=False)
    password = serializers.CharField(style={
        "input_type": "password", "place_holder": "input your password"
    })

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'password', 'profile', 'email', 'firstname', 'lastname', 'age', 'sexe',)

    def create(self, validated_data):
        user = CustomUser(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


class ProductSerializer(serializers.ModelSerializer):

    owner = serializers.FieldDoesNotExist()


    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'description', 'disponibility', 'image1', 'image2', 'image3', 'localisation', 'owner', 'category',)
"""
    def create(self, validated_data):

        request = self.context.get('request')
        if request and hasattr(request, "user"):
            owner = self.context['request'].user

        category = validated_data['category']
        if category == None:
            raise ValidationError(" Please, choose category for that product")
                        
        return Product.objects.create(owner=owner, category=category,
            name= validated_data['name'], description=validated_data['description'],
            price=validated_data['price'], disponibility=validated_data['disponibility'],
            image=validated_data['image'], localisation=validated_data['localisation'],
            )

"""
    # def create(self, validated_data):
    #     Product = Product(**validated_data)

    #     Product.save()
    #     return Product


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('id', 'town', 'quarter', 'whatsapp_number', 'user',)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'description',)
