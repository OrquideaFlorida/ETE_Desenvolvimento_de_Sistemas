fim = int(input("Digite um número positivo: "))

if fim >= 0:
    while fim >= 0:
        print(fim)
        fim -= 1
else:
    print("O número digitado não é válido")
