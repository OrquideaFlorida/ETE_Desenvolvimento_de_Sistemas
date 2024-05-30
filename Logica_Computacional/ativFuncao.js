function passouOuNao(nota1, nota2, nota3, frequencia){
    media = (nota1 + nota2 + nota3) / 3;
    
    if(media >= 7.5 && frequencia >= 75){
        console.log("A média do aluno é ", media.toFixed(2), "com ",frequencia, "% de presença, o aluno foi Aprovado!");
    }else if(media >= 7.5 && frequencia >= 60 || frequencia > 75){
        console.log("A média do aluno é ", media.toFixed(2), "com ",frequencia, "% de presença, o aluno está em Recuperação!");
    }else{
        console.log("A média do aluno é ", media.toFixed(2), "com ",frequencia, "% de presença, o aluno está Reprovado!");
    }
}

passouOuNao(7, 10, 9, 70);