class Human:

    def __str__(self):
        return self.name
    

    def __init__(self, name, age):
        self.name = str(name)
        self.age = age

    def eat():
        print("Eating....")         
       

h1 = Human("David", 24)

print(h1)