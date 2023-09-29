partidasRanke();

function partidasRanke(vitorias, derrotas){
	
	const nivel = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Diamante', 'Lendário', 'Imortal']
	
 vitorias = Math.floor(Math.random() * 200);
 derrotas = Math.floor(Math.random() * 100);
 
 saldoVitorias = vitorias - derrotas
 
 if(saldoVitorias <= 10){
 	
 	console.log("O herói tem saldo de "  + saldoVitorias + " está no nível de " + nivel[0])
 
	
}else if(saldoVitorias <= 20) {
	console.log("O herói tem saldo de "  + saldoVitorias + " está no nível de " + nivel[1])
	

}else if(saldoVitorias <= 50) {
  console.log("O herói tem saldo de "  + saldoVitorias + " está no nível de " + nivel[2])

}else if(saldoVitorias <= 80) {
  console.log("O herói tem saldo de "  + saldoVitorias + " está no nível de " + nivel[3])
  }else if(saldoVitorias <= 90) {
  console.log("O herói tem saldo de "  + saldoVitorias + " está no nível de " + nivel[4])
}
else if(saldoVitorias <= 100) {
  console.log("O herói tem saldo de "  + saldoVitorias + " está no nível de " + nivel[5])
}else if(saldoVitorias >= 101) 
  console.log("O herói tem saldo de "  + saldoVitorias + " está no nível de " + nivel[6])
}