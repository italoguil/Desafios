// notei que as condições pedidas pelo desafio apresenta um pequeno problema
// as condições entre os niveis de prata e ouro, possuem um furo entre elas
// fiz uma pequena correção para evitar que o programa não defina o nivel com base em 
//certos valores de exp, como por exemplo , um heroi possui 5003 de exp, porém 
//nas condições solicitadas, o codigo não mostraria "O Herói de nome "+ nomeHeroi + " está no nível de Prata!"
let nomeHeroi = "Sir.Ítalo"
let exp = 90300


if (exp < 1000) {
    console.log("O Herói de nome "+ nomeHeroi + " está no nível de Ferro!")
}
else if (exp >= 1001 && exp <= 2000 ) {
    console.log("O Herói de nome "+ nomeHeroi + " está no nível de Bronze!")
}
else if (exp >= 2001 && exp <= 6000 ) {
    console.log("O Herói de nome "+ nomeHeroi + " está no nível de Prata!")
}
else if (exp >= 6001 && exp <= 7000 ) {
    console.log("O Herói de nome "+ nomeHeroi + " está no nível de Ouro!")
}
else if (exp >= 7001 && exp <= 8000 ) {
    console.log("O Herói de nome "+ nomeHeroi + " está no nível de Platina!")
}

else if (exp >= 8001 && exp <= 9000 ) {
    console.log("O Herói de nome "+ nomeHeroi + " está no nível de Ascendente!")
}

else if (exp >= 9001 && exp <= 10000 ) {
    console.log("O Herói de nome "+ nomeHeroi + " está no nível de Imortal!")
}
else if (exp >= 10001) {
    console.log("O Herói de nome "+ nomeHeroi + " está no nível de Radiante!")
}


