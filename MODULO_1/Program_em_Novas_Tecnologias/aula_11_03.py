#AULA IF E ELSE

ano = int(input("Digite o ano do seu carro: "))

if ano >= 2020:
    print("O seu carro é novo!")

else:
    print("O seu carro é sucata!!!")

#########################################################

#IMPOSTO DE RENDA A DECLARAR
salario = float(input("Digite o valor do seu salário: "))

imposto = 0
if salario > 3000:
    imposto = imposto + ((salario - 3000) * 0.35)

if salario > 1000:
    imposto = imposto + ((salario - 1000) * 0.20)

print(f"Salário: {salario}, Imposto a pagar: {imposto}")

##########################################################

nome = input("Digite o seu nome: ")
idade = int(input("Digite a sua idade: "))

print("O meu nome é", nome, "tenho", idade, "anos.")
print(f"O meu nome é {nome}, e a minha idade é {idade}")

###########################################################

minutos = int(input("Quantos minutos você usou este mês? "))

if minutos < 200:
    preco = 0.20

elif minutos < 400:
    preco = 0.18

else:
    preco = 0.15

print(f"Você vai pagar este mês: R${minutos * preco}")
