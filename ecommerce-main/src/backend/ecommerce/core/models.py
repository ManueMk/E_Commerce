from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.db import models
from django.contrib.auth.models import PermissionsMixin
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, username=None, **extra_fields):
        if not email:
            raise ValueError('le champ email est requis')
        user = self.model(
            email=self.normalize_email(email),
            username=username,
            **extra_fields
        )
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, username=None):
        user = self.create_user(email=email, password=password, username=username)
        user.is_staff = True
        user.is_superuser = True
        user.is_admin = True
        user.save()
        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField(max_length=100, unique=True, blank=False)
    firstname = models.CharField(max_length=150, blank=False, null=True)
    lastname = models.CharField(max_length=150, blank=False, null=True)
    profile = models.ImageField(blank=True, null=True, upload_to='profile')
    no_cni = models.BigIntegerField(blank=True, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
    shop_name = models.CharField(max_length=25, blank=True, null=True)
    age = models.IntegerField(null=True)
    sexe = models.CharField(max_length=10, choices=[('M', 'MASCULIN'), ('F', 'FEMININ'), ], null=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['username', ]
    objects = CustomUserManager()

    class Meta:
        ordering = ('username',)

    def __str__(self):
        if self.username:
            return self.username
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True


class Address(models.Model):

    town = models.CharField(max_length=255)
    quarter = models.CharField(max_length=255)
    user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True)
    whatsapp_number = models.PositiveIntegerField()

    def __str__(self):
        return self.town + " " + self.quarter


class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=1000)  # min_length = 100

    def __str__(self):
        return self.name


class Product(models.Model):
    DISPONIBILITY = [
        ("Available", "Available"),
        ("Purshased", "Purshased")]

    name = models.CharField(max_length=255)
    price = models.PositiveIntegerField()
    description = models.CharField(max_length=1000,default="inconnu")  # min_length = 100
    disponibility = models.CharField(max_length=255, choices=DISPONIBILITY)
    image1 = ProcessedImageField(upload_to='products',
                                processors=[ResizeToFit(800, upscale=False)], format='JPEG',
                                options={'quality': 95}
                                )
    image2 = ProcessedImageField(upload_to='products',
                                processors=[ResizeToFit(800, upscale=False)], format='JPEG',
                                options={'quality': 95}
                                )
    image3 = ProcessedImageField(upload_to='products',
                                processors=[ResizeToFit(800, upscale=False)], format='JPEG',
                                options={'quality': 95}

                                )
    localisation = models.CharField(
        max_length=255)  # , label_for_field="give the exact location where the product is available"
    registration_date = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(CustomUser, on_delete=models.SET_NULL,null=True,blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name + " " + str(self.price) + " - " + self.description[:20] + "..."
