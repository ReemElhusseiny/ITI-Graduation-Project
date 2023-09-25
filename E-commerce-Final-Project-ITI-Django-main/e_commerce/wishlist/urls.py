from django.urls import path

from .views import WishListListView, AddToWishListView, RemoveFromWishListView



urlpatterns = [
    path('wishlist/', WishListListView.as_view(), name='wishlist-list'),
    path('wishlist/add/', AddToWishListView.as_view(), name='wishlist-create'),
    path('wishlist/remove/<int:pk>/', RemoveFromWishListView.as_view(), name='wishlist-remove'),
   
]
