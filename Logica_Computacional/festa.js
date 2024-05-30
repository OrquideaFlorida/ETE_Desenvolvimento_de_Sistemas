//NA FESTA DO ETE vai ter uma festa e só pode entrar com essas condições:
//se for maior que 18 e passou em todas as matérias o aluno pode entrar.
//se for menor que 18 e estiver com a mãe ou o pai e tiver passado ele pode entrar.
//Se o aluno não passou por média mas frequentou 75% as aulas e é maior 18 pode entrar.

let idade = 20;
let passou = false;
let estaCom = "Pai";
let presenca75 = true;

if (idade > 18 && passou == true || idade > 18 && presenca75 == true){
    console.log(`O aluno pode entrar na festa!`);
}else if(idade < 18 && passou == true && estaCom == "Pai" || estaCom == "Mãe"){
    console.log(`O Aluno está acompanhado do(a) ${estaCom} e pode entrar!`);
// }else if(passou == false && presenca75 == true && idade > 18){
//     console.log("O aluno possui 75% de presença nas aulas e pode entrar!");
}else{
    console.log("O aluno não pode entrar.");
}