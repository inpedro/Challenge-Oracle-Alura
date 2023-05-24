document.getElementById('modo-texto-codificado').style.display = 'none';
//document.querySelector('#logo-preta').style.display = "none";

  
let textarea = document.querySelector('textarea');
let buttonCripto = document.querySelector('#criptografar');
let buttonDescri= document.querySelector('#descriptografar');
let finalText = document.querySelector('#texto_final');
let buttonCopiar = document.querySelector('#copiar');
//let buttonTema = document.querySelector('.botao-tema-DN');


function testArray (text) {
    return text.replace(/\s/g,'').length;
}

function criptografar() {

    let novoTexto = "";
    let textConvert = [];
    let tamanho = testArray(textarea.value);

    if (tamanho != 0) {

        let text = textarea.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        text = text.toLowerCase();

        for (let i = 0; i < text.length; i++) {
            textConvert[i] = text[i];
        }

        for(var i = 0; i < textConvert.length; i++) {
            if (textConvert[i] == "e") {
                textConvert [i] = "enter";
            } else if (textConvert[i] == "i") {
                textConvert[i] = "imes";
            } else if (textConvert[i] == "a") {
                textConvert[i] = "ai";
            } else if (textConvert[i] == "o") {
                textConvert[i] = "ober";
            } else if (textConvert[i] == "u") {
                textConvert[i] = "ufat";
            }
        }

        for (var i = 0; i < textConvert.length; i++) {
            novoTexto = novoTexto + textConvert[i];
        }

        document.getElementById('modo-texto-codificado').style.display = "inline-block";
        document.getElementById('modo-sem-texto').style.display = 'none';

        finalText.textContent = novoTexto;  
        textarea.value = "";    
        
    }

}

function descriptografar() {

    let tamanho = testArray(textarea.value);

    if (tamanho != 0) {

        let novoTexto = textarea.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        novoTexto = novoTexto.toLowerCase();
        novoTexto = novoTexto.replace(/ai/gi, "a");
        novoTexto = novoTexto.replace(/enter/gi, "e");
        novoTexto = novoTexto.replace(/ober/gi, "o");
        novoTexto = novoTexto.replace(/imes/gi, "i");
        novoTexto = novoTexto.replace(/ufat/gi, "u");
        finalText.textContent = novoTexto;
        textarea.value = "";

        document.getElementById('modo-texto-codificado').style.display = "inline-block";
        document.getElementById('modo-sem-texto').style.display = 'none';

    }
}


function copiarTexto() {
    const textcopy = finalText.innerHTML;  
    navigator.clipboard.writeText(textcopy);
}


buttonCripto.onclick = criptografar;
buttonDescri.onclick = descriptografar;
buttonCopiar.onclick = copiarTexto;


