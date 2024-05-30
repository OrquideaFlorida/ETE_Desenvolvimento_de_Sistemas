#Programa que exibe os números de 1 a 100 até que seja digitado 0

while True:
    x = int(input("Digite um número (ou zero para sair)"))
    if x == 0:
        break
    while x <=100:
        print(x)
        x = x + 1
    
