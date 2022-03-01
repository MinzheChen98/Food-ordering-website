from django.db import models

class Customer(models.Model):
    Firstname = models.CharField(max_length=100)
    Lastname = models.CharField(max_length=100)
    Address = models.CharField(max_length=250)
    Email = models.CharField(max_length=100)
    Password = models.CharField(max_length=100)
    Phone_Number = models.IntegerField()

    def __str__(self):
        return self.Firstname + ' ' + self.Lastname

class Restaurant(models.Model):
    Name = models.CharField(max_length=100)
    Cuisine = models.CharField(max_length=100)
    Address = models.CharField(max_length=250)
    Rating =  models.IntegerField()

    def __str__(self):
        return self.Name
 
class Dish(models.Model):
    Name = models.CharField(max_length=100)
    Cuisine = models.CharField(max_length=100)
    Restaurant = models.CharField(max_length=100)
    Calories =  models.IntegerField()
    Price =  models.IntegerField()
    Description = models.CharField(max_length=250)

    def __str__(self):
        return self.Name
