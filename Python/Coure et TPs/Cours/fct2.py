#definition
def Sommation(a,b) :
    # s est une variable locale à la fonction
    s=a+b
    print("merci")
    return s
    

#appel
x=int(input("saisir le premier nombre "))
y=int(input("saisir le deuxième nombre "))

R=Sommation(x, y)             


# print("la somme des deux nombres :" , s)