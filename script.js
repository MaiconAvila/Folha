let i = 0;
let imagem = [];
let tempo = 3000;

let primeiraMarcacao = document.querySelector('.marcacaoPrimeiraImagem');
let segundaMarcacao = document.querySelector('.marcacaoSegundaImagem');
let terceiraMarcacao = document.querySelector('.marcacaoTerceiraImagem');

imagem[0] = "assets/primeira-imagem.png";
imagem[1] = "assets/segunda-imagem.png";
imagem[2] = "assets/terceira-imagem.png";

function mudarImg(){
	document.slide.src = imagem[i];

	if(i < imagem.length - 1){
    i++;
	} else { 
		i = 0;
	}

	setTimeout("mudarImg()", tempo);
}

window.onload = mudarImg;