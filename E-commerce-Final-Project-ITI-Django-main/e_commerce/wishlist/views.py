from django.shortcuts import get_object_or_404, redirect
from django.core.mail import send_mail
from django.http import HttpResponse
from rest_framework.decorators import  permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

# ------------------ Django Task ------------------
from .models import WishList
from base.models import User
from products.models import ProductItem
from .serializers import WishListSerializer


class WishListListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        wishlist_data = WishList.objects.filter(user=request.user)
        serializer = WishListSerializer(wishlist_data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class AddToWishListView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        product_id = request.data.get('product_id')

        if not product_id:
            return Response({'error': 'Product ID is required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            product = ProductItem.objects.get(id=product_id)
        except ProductItem.DoesNotExist:
            return Response({'error': 'Product not found.'}, status=status.HTTP_404_NOT_FOUND)

        wishlist_item, created = WishList.objects.get_or_create(user=request.user, product=product)

        if not created:
            return Response({'error': 'Product already in wishlist.'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = WishListSerializer(wishlist_item)
        return Response(serializer.data, status=status.HTTP_200_OK)   

# send id of wishlist in url 
class RemoveFromWishListView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk):
        try:
            wishlist_item = WishList.objects.get(pk=pk, user=request.user)
        except WishList.DoesNotExist:
            return Response({'error': 'Wishlist item not found.'}, status=status.HTTP_404_NOT_FOUND)

        wishlist_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
         

        
        
        
