let sobreMim={
    nome:"Mariana",
    idade:18,
    maiorIdade:true
}

sobreMim.filmePreferido="Operação Big Hero";
console.log(sobreMim);

delete sobreMim.maiorIdade;
console.log(sobreMim);

console.log(sobreMim);

let cadastro=[ 
  {
    nome:"Bianca",
    idade:18,
    telefone:11111,
    amigos:["Beatriz", "Davi", "Kaue", "Luana"],
    maiorIdade: true
  },
  {
    nome:"Beatriz",
    idade:15,
    telefone:11111,
    amigos:["Bianca", "Davi", "Kaue", "Luana"],
    maiorIdade:false
  },
  {
    nome:"Davi",
    idade:15,
    telefone:11111,
    amigos:["Bianca", "Beatriz", "Kaue", "Luana"],
    maiorIdade:false
  },
  {
    nome:"Kaue",
    idade:15,
    telefone:11111,
    amigos:["Bianca", "Davi", "Beatriz", "Luana"],
    maiorIdade:false
  }
];

for(let contador=0; contador<cadastro.length;contador++){
    console.log(cadastro[contador].amigos[contador])
}