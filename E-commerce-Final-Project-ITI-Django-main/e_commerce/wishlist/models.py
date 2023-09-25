from django.db import models

# Create your models here.

from base.models import User
from products.models import ProductItem
# Create your models here.
    
    
class WishList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(ProductItem, on_delete=models.CASCADE)

    def str(self):
        return f"{self.product.name} ({self.quantity}) in Cart for {self.user.username}"    
    
