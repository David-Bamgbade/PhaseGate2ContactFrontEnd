import random

i = 1

while i == 1:

    random_integer = random.randint(1,5)

    numbers = int(input((" Enter A Number Between 1 and 5: ")))

    if(numbers > random_integer):
        print(f"Incorrect Number, Correct Answer Was: {random_integer}")

    if(numbers < random_integer):
       print(f"Incorrect Number, Correct Answer Was:{random_integer}")

    if(numbers == random_integer):
        print("Correct You Won")
             
    question = input("Do You Still Want To Play y/n ")
    if(question == "y"):
        continue

    if(question == "n"):
        print("Thanks For Playing")

    question2 = input("Do You Want To Go Back To Main Menu y/n ")
    if(question2 == "y"):
                continue
    if(question2 == "n"):
         break
i+1

               




       

