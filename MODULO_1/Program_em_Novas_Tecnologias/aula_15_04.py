#Listas
numeros = [0, 0, 0, 0, 0]
x = 0

while x < 5:
    numeros[x] = int(input(f"Número {x + 1}: ")) #f usando para inserir variáveis em textos
    x += 1
    # Acessa o o elemento de numeros, um por um, até 4 (índice 5)

while True:
    escolhido = int(input("Que posição você quer imprimir? (0 para sair): "))
    if escolhido == 0:
        break
    print(f"Você escolheu o número: {numeros[escolhido - 1]}")