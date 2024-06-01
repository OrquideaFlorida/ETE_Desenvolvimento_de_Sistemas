#Função len()
#Em uma string, a função retorna o número de caractéres
#Mostra a quantidade de elementos da lista
L = [10, 20, 30]
x = 0

while x < len(L): 
    print(L[x]) # L[] Acessa a posição de cada elemento da fila
    x += 1

# .append() -> Adiciona elementos na lista

L = [] # -> Lista vazia
#Utilizado para definir quais elementos serão adicionados em cada índice da lista
while True:
    n = int(input("Digite um número (0 para sair): ")) 
    if n == 0:
        break
    L.append(n) # -> Adiciona o número escolhido n, na lista L a cada looping

x = 0
while x < len(L):
    print(L[x]) # Vai mostrar cada elemento do índice na ordem que foi acionado acima
    x += 1

#Toda função é um método
#Tudo que estiver dentro da função, são parâmetros

##################################################################################

