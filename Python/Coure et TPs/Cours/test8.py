D={"numero" : 1000 , "nom" : "alami" , "prenom":"mouhamed","age":18,"moyenne" :12.8 , "notes" : [12.3,14,11] , "adresse":  {"rue":"casacblanca n 20 ","ville":"oujda"} }

# print(D)
# print(D["numero"])
# print(D['nom'])
# print(D["notes"][0])
# print(D["notes"][1])
# print(D["notes"][2])

# for i in range(len(D["notes"])):
#     print(D["notes"][i])

# print(D["adresse"]["ville"])

# D["nom"]="Idrissi"
# print(D)

# del D["age"]
# D.pop("age")


# k="age"

# if k in D:
#     print("oui")
# else:
#     print('non')

#parcourir les clés du dictionnaire

# for a in D:
#     print(a)

# for a in D.keys() :
#     print(a)

#parcourir les valeurs

# for a in D.values():
#     print(a)

# for a in D.items():      #les elements du dictionnaire
#     print(a)


# for a,b in D.items():      #les elements du dictionnaire
#     print("la clé :",a," valeur :" ,b)
    

# for a in D.keys():

#     print(D[a])
#ajouter un alement au dictionnaire
# D["reussi"]=True
# print(D)


# D2={}

# D2["NomEtablissemnt"]=input("Saisir le nom de l'etablissement !")
# D2["directeur"]=input("donner le nom di directeur ")
# D2["nbsurveillants"]=int(input("Saisir le nombre de surveillant "))
# print(D2)


# L=[ {"nometab":"CFMNTIO","nbsurv":2} , {"nometab":"ISTA lazaret","nbsurv":3} ]

# print(L[0]["nometab"])
# print(L[1]["nometab"])

L=[]
for i in range(3):
    D2={}
    D2["NomEtablissemnt"]=input("Saisir le nom de l'etablissement !")
    D2["directeur"]=input("donner le nom di directeur ")
    D2["nbsurveillants"]=int(input("Saisir le nombre de surveillant "))
    L.append(D2)
print(L)

