import tkinter as tk
from tkinter import ttk
#Création d’un nouvel objet Tk. Cet objet représente la fenêtre principale de l’application graphique
root = tk.Tk()
root.geometry('1200x600')
numLabel = tk.Label(text='Numéro:')
numLabel1=tk.Label(text='1')
numLabel1.config(state=tk.DISABLED)
numLabel.place (x= 20, y =20)
numLabel1.place (x= 100, y =20)
propLabel = tk.Label(text='Propriétaire:')
propText=tk.Entry(textvariable='')
propLabel.place (x= 20, y =50)
propText.place (x= 100, y =50)
SoldeLabel = tk.Label(text='Solde Initial:')
SoldeText=tk.Entry(textvariable='')
euroLabel = tk.Label(text='Dirhams')
SoldeLabel.place (x= 20, y =80)
SoldeText.place (x= 100, y =80)
euroLabel.place(x=240,y=80)
TypeLabel = tk.Label(text='Type:')
v=tk.IntVar()
case1=tk.Radiobutton(variable = v, value='1')
case2=tk.Radiobutton(variable = v, value='2')
case1.config(text='Courant')
case2.config(text='Epargne')
v.set ('1')
TypeLabel.place(x=20, y=110 )
case1.place (x= 100, y =110)
case2.place (x= 240, y =110)
case1.config(state=tk.NORMAL)
tauxIntLabel = tk.Label(text='Taux Interêt')
tauxIntText=tk.Entry(textvariable='')
pourcentLabel = tk.Label(text='%')
tauxIntLabel.place(x=20, y=140 )
tauxIntText.place (x= 100, y =140)
pourcentLabel.place (x= 240, y =140)
decouvertLabel = tk.Label(text='M. Découvert')
decouvertext= tk.Entry(textvariable='')
decouvertEuroLabel = tk.Label(text='Dirhams')
decouvertLabel.place(x=20, y=170 )
decouvertext.place (x= 100, y =170)
tauxIntText.config(state=tk.DISABLED)
#Création du bouton et du tableau
ajouter= tk.Button(text='Création Compte')
ajouter.place (x= 100, y =210)
area=('#', 'Numéro', 'Propriétaire', 'soldeInitial', 'type', 'Taux Intérêt', 'Montant Découvert')
ac=('all','n','e','s','ne','nw','sw')
tv=ttk.Treeview(root,columns=ac,show='headings',height=7)
for i in range(7):
    tv.column(ac[i],width=120,anchor='e')
    tv.heading(ac[i],text=area[i])
tv.place (x= 150, y =300)
#Définition de la fonction add() permettant d’ajouter un nouveau compte dans le tableau avec les données saisies
o=""
def add():
    #print(str(v.get()))
    if(str(v.get()) =='1'):
        o='courant'
        c = CompteCourant(propText.get(), SoldeText.get(), decouvertext.get())
        cc = ('', str(Compte.nb), propText.get(), SoldeText.get(), 'Courant', '', decouvertext.get())
    else:
        o='epargne'
        c = CompteEpargne(propText.get(), SoldeText.get(), tauxIntText.get())
        cc = ('', str(Compte.nb), propText.get(), SoldeText.get(), 'Epargne', tauxIntText.get(),'')
    numLabel1.config(text=str(Compte.nb + 1))
    tv.insert('','end', values=cc)
    propText.delete(0,'end')
    SoldeText.delete(0,'end')
    decouvertext.delete(0,'end')
    tauxIntText.delete(0,'end')
#Définition de la fonction modifVisib() permettant gérer la visibilité des champs de texte taux interêt et montant de découvert
#Programmation de l’évènement sur le bouton ainsi que sur les boutons radio
def modifVisib(evt):
    #print(str(v.get()))
    if (str(v.get()) == '2'):
        tauxIntText.config(state=tk.DISABLED)
        decouvertext.config(state=tk.NORMAL)
    if (str(v.get()) == '1'):
        tauxIntText.config(state=tk.NORMAL)
        decouvertext.config(state=tk.DISABLED)

ajouter.config (command = add)
case1.bind("<Button-1>", modifVisib)
case1.focus_set()
case2.bind('<Button-1>', modifVisib)
case2.focus_set()
# mainloop()affiche la fenêtre et lance la boucle d’événements. 
root.mainloop()