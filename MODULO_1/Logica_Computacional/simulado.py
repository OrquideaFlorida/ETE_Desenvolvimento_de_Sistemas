#Media
nota1 = int(input("Digite a primeira nota: "))
nota2 = int(input("Digite a segunda nota: "))
nota3 = int(input("Digite a terceira nota: "))
nota4 = int(input("Digite a quarta nota: "))
nota5 = int(input("Digite a quinta nota: "))

media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

if media >= 7:
    print("Aluno Aprovado")
elif media < 7 and media >= 5:
    print("Aluno em Recuperação")
else:
    print("Aluno Reprovado")

##############################################################

#FERIADO

feriado = True
tempo = "Sol"
diaSemana = "Sabado"

if feriado == True and tempo == "Sol":
    print("Eu vou a praia!")
elif feriado == True and tempo == "Chuva":
    print("Vou ficar em casa assinstindo Animes e Doramas")
elif tempo == "Sol" and diaSemana == "Sabado":
    print("eu vou ir à praia pegar um solzinho.")
elif feriado == False and diaSemana != "Sabado" or diaSemana != "Domingo":
    print("eu vou trabalhar porque preciso pagar minhas dívidas.")
else:
    print("Escolha uma opção válida!")

#####################################################################################

#IMPAR PAR
imparPar = int(input("Digite um número de 0 a 100: "))

if imparPar > 100:
    print("Digite apenas números de 0 a 100")
elif imparPar % 2 == 0:
    print("O número é Par")
else:
    print("O número é ímpar")
###########################################################################################

#Asterísco

numero = int(input("Digite um número: "))

############################################################################################

#Vogal

vogal = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

palavra = input("Digite um palavra: ")

if palavra [0] in vogal:
    print(f"A palavra {palavra} começa com vogal!")
else:
    print(f"A palavra {palavra} começa com consoante!")

#############################################################################################

#Array

flores = ["Orquidea", "Gardenia", "Girassol", "Rosa", "Margarida", "Jasmin", "Lavanda"]

flores.append("Hortensia")
flores.append("Cravo")
flores.append("Tulipa")

flores.insert(0, "Copo de Leite")
flores.insert(1, "Cravo")

flores.insert(5, "Lirio")

flores.pop()
flores.pop()

flores.pop(0)

print(flores)

flores[2] = "Papoula"

#######################################################################################

#FIZZ E BUZZ

divisivel = int(input("Digite um número: "))

if divisivel % 5 == 0 and divisivel % 3 == 0:
    print("FizzBuzz")
elif divisivel % 3 == 0:
    print("Fizz")
elif divisivel % 5 == 0:
    print("Buzz")
else:
    print("Não é divisível por 3 nem por 5!")

#######################################################################################

#Maior e Menor

valores = [54, 10, 29, 87, 7, 64]

maiorValor = max(valores) # max() Define o maior valor
menorValor = min(valores) #min() Determina o menor valor
print(f"O maior valor da array é {maiorValor}")
print(f"O menor valor da array é {menorValor}")

########################################################################################

#Vendas

vendas = float(input("Digite o valor da venda: "))

if vendas > 1000 and vendas <= 3000:
    print("Parabéns, bateu a primeira meta!")
elif vendas > 3000 and vendas <= 4500:
    print("Parabéns, bateu a segunda meta, bônus de R$200 para o vendedor!")
elif vendas > 4500:
    print("parabéns, bateu a 3ª meta, bônus de R$500 para o vendedor!")
else:
    print("Tente outra vez!!!!!")


