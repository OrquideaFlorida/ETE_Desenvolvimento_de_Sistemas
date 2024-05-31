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

#While, para adicionar números à lista
while True:
    n = int(input("Digite um número (0 para sair): "))
    if n == 0:
        break
    L.append(n)

#For, para imprimir os elementos da lista
x = 0
for x in L:
    print(x)

#O comando WHILE é usado quando se deseja realizar uma repetição que não tenha um limite estabelecido.
#Por exemplo, quando você quer ficar gerando numeros aleatorios e apenas quando o numero for 948 o while vai ser interrompido.
#Já o FOR, serve para realizar uma repetição on já sabe o limite dela.