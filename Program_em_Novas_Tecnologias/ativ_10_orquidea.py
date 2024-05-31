# Modifique o programa ilustrado na Atividade Extraclasse da Aula 10 usando for.
# Explique por que nem todos os while podem ser transformados em for.
L = []

while True:
    n = int(input("Digite um número (0 para sair): "))
    if n == 0:
        break
    L.append(n)

x = 0
while x < len(L):
    print(L[x])
    x += 1

#########################################################
#RESOLUÇÃO
L = []

while True:
    n = int(input("Digite um número (0 para sair): "))
    if n == 0:
        break
    L.append(n)

x = 0
for x in L:
    print(x)

#O comando WHILE é usado quando se deseja realizar uma repetição que não tenha um limite estabelecido.
#Já o FOR, serve para realizar uma repetição onde já se sabe o limite dela.