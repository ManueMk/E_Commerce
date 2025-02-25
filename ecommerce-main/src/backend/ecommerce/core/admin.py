from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .forms import UserChangeForm, UserCreationForm
from .models import Address, Category, Product, CustomUser


class AddressAdmin(admin.ModelAdmin):
    list_display = ('town', 'quarter', 'user', 'whatsapp_number')
    list_filter = ('town', 'quarter', 'whatsapp_number')
    search_fields = ['town', 'quarter', 'whatsapp_number']


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    list_filter = ('name', 'description')
    search_fields = ['name', 'description']


class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'disponibility', 'description', 'localisation', 'owner', 'category', 'image1', 'image2', 'image3')
    list_filter = ('name', 'price', 'disponibility', 'category')
    search_fields = ['name', 'price', 'disponibility', 'category']


##################################################################################################


class UserAdmin(BaseUserAdmin):
    # The forms to add and change user instances
    form = UserChangeForm
    add_form = UserCreationForm

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = ('email', 'username', 'profile', 'is_admin')
    list_filter = ('is_admin',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('username',)}),
        ('Permissions', {'fields': ('is_admin', 'is_staff',)}),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': (
                'email', 'username', 'firstname', 'lastname', 'password1', 'password2', 'no_cni', 'age', 'sexe',
                'shop_name', 'is_active'),
        }),
    )
    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()


##########################################################################################################

admin.site.register(Address, AddressAdmin)
admin.site.register(CustomUser, UserAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
