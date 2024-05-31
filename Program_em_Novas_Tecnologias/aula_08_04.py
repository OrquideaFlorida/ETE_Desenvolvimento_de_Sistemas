#Listas
lista = [15, 20, 30]
print("O valor da lista é ", lista[1])

#Substituindo o elemento do índice 1 da lista
lista[1] = 7
print(lista)

################################################
notas = [6, 7, 5, 8, 9]
soma = 0
x = 0

while x < 5:
    soma += notas[x]
    x += 1
print(f"Media: {soma / x:5.2f}")

#################################################
notas = [0, 0, 0, 0, 0]
soma = 0
x = 0

while x < 5:
    notas[x] = float(input(f"Nota {x}:"))
    soma += notas[x]
    x += 1

x = 0
while x < 5:
    print(f"Nota{x}: {notas[x]: 6.2f}")
    x += 1
    print(f"Média: {soma / x:5.2f}")
