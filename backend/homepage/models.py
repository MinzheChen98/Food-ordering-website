from django.db import models



class User(models.Model):
    Firstname = models.CharField(max_length=100)
    Lastname = models.CharField(max_length=100)
    Adress = models.CharField(max_length=250)
    Email = models.CharField(max_length=100)
    Password = models.CharField(max_length=100)
    Phone Number = models.IntegerField()


class Restaurant(models.Model):
    Name = models.CharField(max_length=100)
    Cuisine = models.CharField(max_length=100)
    Adress = models.CharField(max_length=250)
    Rating =  models.IntegerField()
 
class Dishes(models.Model):
    NameofDish = models.CharField(max_length=100)
    Cuisine = models.CharField(max_length=100)
    Restaurant = models.CharField(max_length=100)
    Calories =  models.IntegerField()
    Price =  models.IntegerField()
    Description = models.CharField(max_length=250)


