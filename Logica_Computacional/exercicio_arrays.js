console.log("---FLORICULTURA MAGIKS---");
var flores = ["Margarida", "Jasmin", "Lavanda", "Girassol", "Rosa"];

flores.push("Lírio");
flores [4] = "Hibisco";
flores.splice(0, 0, "Hortênsia", "Gardênia");
flores.pop();

console.log(flores);
console.log(`Nossa Floricultura possui mais de ${flores.length} variedades!!!`);

for(var i = 0; i < flores.length; i++){
    flores[i] += ", Não alérgico";
};

console.table(flores);
