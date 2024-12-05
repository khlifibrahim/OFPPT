# import tkinter as tk
# from tkinter import messagebox

# def login_screen(root):
#     def validate_login():
#         # Replace this with your actual login validation logic
#         if username_entry.get() == "admin" and password_entry.get() == "password":
#             messagebox.showinfo("Login Successful", "Welcome, Admin!")
#             root.deiconify()  # Show the main application window
#             login_window.destroy()
#             return True
#         else:
#             messagebox.showerror("Login Failed", "Invalid username or password")
#             return False
    
#     login_window = tk.Toplevel(root)
#     login_window.title("Login")
#     login_window.geometry("300x150")

#     tk.Label(login_window, text="Username:").pack()
#     username_entry = tk.Entry(login_window)
#     username_entry.pack()

#     tk.Label(login_window, text="Password:").pack()
#     password_entry = tk.Entry(login_window, show="*")
#     password_entry.pack()

#     login_button = tk.Button(login_window, text="Login", command=validate_login)
#     login_button.pack()

#     # Center the login window on the screen
#     login_window.update_idletasks()
#     width = login_window.winfo_width()
#     height = login_window.winfo_height()
#     x = (login_window.winfo_screenwidth() // 2) - (width // 2)
#     y = (login_window.winfo_screenheight() // 2) - (height // 2)
#     login_window.geometry('{}x{}+{}+{}'.format(width, height, x, y))


import tkinter as tk
from tkinter import ttk
from tkinter import messagebox
from src.compte import Compte
from src.compte_courant import CompteCourant
from src.compte_epargne import CompteEpargne

class Application:
    def _init_(self):
        self.root = tk.Tk()
        self.root.geometry('1200x600')
        self.login_gui()
        self.root.mainloop()

    def login_gui(self):
        self.root.title("Login")

        self.username_label = tk.Label(self.root, text="Username:")
        self.username_label.place(x=50, y=50)
        self.username_entry = tk.Entry(self.root)
        self.username_entry.place(x=150, y=50)

        self.password_label = tk.Label(self.root, text="Password:")
        self.password_label.place(x=50, y=100)
        self.password_entry = tk.Entry(self.root, show='*')
        self.password_entry.place(x=150, y=100)

        self.login_button = tk.Button(self.root, text="Login", command=self.check_login)
        self.login_button.place(x=150, y=150)
        self.login_entry =tk.Button(self.root)
        




    def check_login(self):
        username = self.username_entry.get()
        password = self.password_entry.get()
    
        if username  and password :
            self.main_window()
        else:
            messagebox.showerror("Login Failed", "Invalid credentials")

    def main_window(self):
        self.root.withdraw() 
        MainApplication()

class MainApplication:
    def _init_(self):
        self.root = tk.Tk()
        self.root.geometry('1200x600')
        self.setup_gui()
        self.run()

    def setup_gui(self):
        self.root.title("Main Window")

        self.numLabel = tk.Label(self.root, text='Numéro:')
        self.numLabel1 = tk.Label(self.root, text='1')
        self.numLabel1.config(state=tk.DISABLED)
        self.numLabel.place(x=20, y=20)
        self.numLabel1.place(x=100, y=20)

        self.propLabel = tk.Label(self.root, text='Propriétaire:')
        self.propText = tk.Entry(self.root)
        self.propLabel.place(x=20, y=50)
        self.propText.place(x=100, y=50)

        self.SoldeLabel = tk.Label(self.root, text='Solde Initial:')
        self.SoldeText = tk.Entry(self.root)
        self.euroLabel = tk.Label(self.root, text='Dirhams')
        self.SoldeLabel.place(x=20, y=80)
        self.SoldeText.place(x=100, y=80)
        self.euroLabel.place(x=240, y=80)

        self.TypeLabel = tk.Label(self.root, text='Type:')
        self.v = tk.IntVar()
        self.case1 = tk.Radiobutton(self.root, variable=self.v, value=1, text='Courant')
        self.case2 = tk.Radiobutton(self.root, variable=self.v, value=2, text='Epargne')
        self.v.set(1)
        self.TypeLabel.place(x=20, y=110)
        self.case1.place(x=100, y=110)
        self.case2.place(x=240, y=110)

        self.tauxIntLabel = tk.Label(self.root, text='Taux Intérêt')
        self.tauxIntText = tk.Entry(self.root)
        self.pourcentLabel = tk.Label(self.root, text='%')
        self.tauxIntLabel.place(x=20, y=140)
        self.tauxIntText.place(x=100, y=140)
        self.pourcentLabel.place(x=240, y=140)

        self.decouvertLabel = tk.Label(self.root, text='M. Découvert')
        self.decouvertext = tk.Entry(self.root)
        self.decouvertEuroLabel = tk.Label(self.root, text='Dirhams')
        self.decouvertLabel.place(x=20, y=170)
        self.decouvertext.place(x=100, y=170)

        self.tauxIntText.config(state=tk.DISABLED)

        self.ajouter = tk.Button(self.root, text='Création Compte', command=self.add)
        self.ajouter.place(x=100, y=210)

        self.area = ('#', 'Numéro', 'Propriétaire', 'Solde Initial', 'Type', 'Taux Intérêt', 'Montant Découvert')
        self.ac = ('#1', '#2', '#3', '#4', '#5', '#6', '#7')
        self.tv = ttk.Treeview(self.root, columns=self.ac, show='headings', height=7)
        for i, col in enumerate(self.ac):
            self.tv.column(col, width=120, anchor='e')
            self.tv.heading(col, text=self.area[i])
        self.tv.place(x=150, y=300)

    def add(self):
        if self.v.get() == 1:
            c = CompteCourant(self.propText.get(), self.SoldeText.get(), self.decouvertext.get())
            cc = ('', str(Compte.nb), self.propText.get(), self.SoldeText.get(), 'Courant', '', self.decouvertext.get())
        else:
            c = CompteEpargne(self.propText.get(), self.SoldeText.get(), self.tauxIntText.get())
            cc = ('', str(Compte.nb), self.propText.get(), self.SoldeText.get(), 'Epargne', self.tauxIntText.get(), '')

        self.numLabel1.config(text=str(Compte.nb + 1))
        self.tv.insert('', 'end', values=cc)
        self.clear_entries()

    def clear_entries(self):
        self.propText.delete(0, 'end')
        self.SoldeText.delete(0, 'end')
        self.decouvertext.delete(0, 'end')
        self.tauxIntText.delete(0, 'end')

    def modifVisib(self, evt):
        if self.v.get() == 2:
            self.tauxIntText.config(state=tk.NORMAL)
            self.decouvertext.config(state=tk.DISABLED)
        else:
            self.tauxIntText.config(state=tk.DISABLED)
            self.decouvertext.config(state=tk.NORMAL)

    def run(self):
        self.case1.bind("<Button-1>", self.modifVisib)
        self.case2.bind('<Button-1>', self.modifVisib)
        self.root.mainloop()


