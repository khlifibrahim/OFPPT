ph = input('Saisire une phrase: ')

vo = ['a', 'e', 'i', 'o', 'u', 'y']
co = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
v = []
c = []


for i in range(len(ph)):

    for j in range(len(vo)):
        if ph[i] == vo[j]:
            v.append(ph[i])
        
    for k in range(len(co)):
        if ph[i] == co[k]:
            c.append(ph[i])


print(f'les voyelles son: ', end='')
for i in range(len(v)):
    print(v[i], end='')
print()
print(f'les consons son: ', end='')
for i in range(len(c)):
    print(c[i], end='')