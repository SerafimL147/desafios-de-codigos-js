const nomeHeroi = [
    ['Katarina', 'Veigar' ,'Zed' ,'Yasuo', 'Morgana' ,'Fish' ,'Nasus' ,'LeBlanc']
]

const nomeXP = [
    ['Ferro', 'Bronze' ,'Prata' ,'Ouro' , 'Platina' ,'Ascendente' ,'Imortal' ,'Radiante']
]

let xpmin = 0
let xpmax = 15000
let xpHeroi = Math.floor(Math.random() * (xpmax - xpmin + 1)) + xpmin


let ferro = 1000
let bronze = 2000
let prata = 5000
let ouro = 7000
let platina = 8000
let ascendente = 9000
let imortal = 10000
let radiante = 10001


if(xpHeroi <= ferro){
    console.log("O Herói de nome " + nomeHeroi[0][0] ,"está no nível de " + nomeXP[0][0])
}

else if(xpHeroi <= bronze){
    console.log("O Herói de nome " + nomeHeroi[0][1] ,"está no nível de " + nomeXP[0][1])
}
else if(xpHeroi <= prata){
    console.log("O Herói de nome " + nomeHeroi[0][2] ,"está no nível de " + nomeXP[0][2])
}
else if(xpHeroi <= ouro){
    console.log("O Herói de nome " + nomeHeroi[0][3] ,"está no nível de " + nomeXP[0][3])
}
else if(xpHeroi <= platina){
    console.log("O Herói de nome " + nomeHeroi[0][4] ,"está no nível de " + nomeXP[0][4])
}
else if(xpHeroi <= ascendente){
    console.log("O Herói de nome " + nomeHeroi[0][5] ,"está no nível de " + nomeXP[0][5])
}
else if(xpHeroi <= imortal){
    console.log("O Herói de nome " + nomeHeroi[0][6] ,"está no nível de " + nomeXP[0][6])
}
else if(xpHeroi > imortal){
    console.log("O Herói de nome " + nomeHeroi[0][7] ,"está no nível de " + nomeXP[0][7])
}

