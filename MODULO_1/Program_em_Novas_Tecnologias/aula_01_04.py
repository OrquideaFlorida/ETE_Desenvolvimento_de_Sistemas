#Somar os números indicados
s = 0
while True:
    v = int(input("Digite um número para somar, ou 0 para sair: "))
    if v == 0:
        break
    s += v

print(s)

#######################################################################
#Acumuladores
quantidade_numeros = 0
soma = 0

while True:
    numero = int(input("Digite um número inteiro (Digite 0 para sair): "))
    if numero == 0:
        break

    quantidade_numeros += 1
    soma += numero

if quantidade_numeros > 0:
    media = soma / quantidade_numeros
else:
    media = 0
print(f"\nQuantidade de números digitados: {quantidade_numeros}")
print(f"Soma dos números digitados {soma}")
print(f"Média aritmética dos números digiados: {media:.2f}")

#########################################################################
#Repetições Aninhadas

tabuada = 1

while tabuada <= 10:
    numero = 1

    while numero <= 10:
        print(f"{tabuada} X {numero} = {tabuada * numero}")
        numero += 1

    tabuada += 1
    print("------------")