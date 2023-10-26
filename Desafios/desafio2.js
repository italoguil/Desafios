// // Instruções para entrega
//  # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 

  
// Bons estudos 😉

let wins = 120
function rank (win, lose){
   const winRate = win - lose;
   
   let nivel = ""; 

  switch (true) {
    case win < 10:
      nivel = "Ferro"; 
      break;
    case win >= 11 && win <= 20:
      nivel = "Bronze"; 
      break;
    case win >= 21 && win <= 50:
      nivel = "Prata"; 
      break;
    case win >= 51 && win <= 80:
      nivel = "Ouro"; 
      break;
    case win >= 81 && win <= 90:
      nivel = "Diamante";
      break;
    case win >= 91 && win <= 100:
      nivel = "Lendário"; 
      break;
    case win >= 101:
      nivel = "Imortal";
      break;
  }

  
  console.log(`O Herói tem saldo de ${winRate} e está no nível de ${nivel}`);
}


rank(121, 20);
