var p1 = prompt("Digite pedra, papel ou tesoura");
var p2 = Math.floor(Math.random() * 2);;

switch (p2){
    case 0:
        p2 = "pedra";
    break;
    case 1:
        p2 = "papel";
    break;
    case 2:
        p2 = "tesoura";
    break;
}

if (p1 == "pedra") {
    if (p2 == "tesoura") {
        document.querySelector('#resultado').innerHTML = "Pedra quebra tesoura <br/> Você Ganhou <br/> <input type='button' value='Jogar de novo?' onClick='window.location.reload()'>";
    } else if (p2 == "papel"){
        document.querySelector('#resultado').innerHTML = "Papel envolve a Pedra <br/> Você Perdeu <br/> <input type='button' value='Jogar de novo?' onClick='window.location.reload()'>";
    } else if (p2 == "pedra") {
        document.querySelector('#resultado').innerHTML = "Empate <br/> <input type='button' value='Jogar de novo?' onClick='window.location.reload()'>";
    }
}

else if (p1 == "tesoura") {
    if (p2 == "pedra") {
        document.querySelector('#resultado').innerHTML = "Pedra quebra tesoura <br/> Você Perdeu <br/> <input type='button' value='Jogar de novo?' onClick='window.location.reload()'>";
    } else if (p2 == papel){
        document.querySelector('#resultado').innerHTML = "tesoura corta papel <br/> Você Ganhou <br/> <input type='button' value='Jogar de novo?' onClick='window.location.reload()'>";
    } else if (p2 == "tesoura") {
        document.querySelector('#resultado').innerHTML = "Empate <br/> <input type='button' value='Jogar de novo?' onClick='window.location.reload()'>";
    }
}

else if (p1 == "papel"){
    if (p2 == "pedra") {
        document.querySelector('#resultado').innerHTML = "Papel envolve pedra <br/> Você Ganhou <br/> <input type='button' value='Jogar de novo?' onClick='window.location.reload()'>";
    }else if (p2 == "tesoura") {
        document.querySelector('#resultado').innerHTML = "Tesoura corta papel <br/> Você Perdeu <br/> <input type='button' value='Jogar de novo?' onClick='window.location.reload()'>";
    }else if (p2 == "papel")  {
        document.querySelector('#resultado').innerHTML = "Empate <br/> <input type='button' value='Jogar de novo?' onClick='window.location.reload()'>";
    }
}

