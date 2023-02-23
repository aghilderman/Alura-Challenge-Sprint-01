const texto = document.querySelector(".texto");
const mensaje = document.querySelector("#mensaje");

function encriptar(textoEncriptado){
    const llave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

    for(let a = 0; a < llave.length; a++){
        if(textoEncriptado.includes(llave[a][0])){
            textoEncriptado = textoEncriptado.replaceAll(llave[a][0], llave[a][1]);
        }
    }
    return textoEncriptado;
}

function botonEncriptar(){
    const textoIngresado = encriptar(texto.value);
    mensaje.value = textoIngresado;
    texto.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(textoDesencriptado){
    const llave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let a = 0; a < llave.length; a++){
        if(textoDesencriptado.includes(llave[a][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(llave[a][1], llave[a][0]);
        }
    }
    return textoDesencriptado;
}

function botonDesencriptar(){
    const textoIngresado = desencriptar(texto.value);
    mensaje.value = textoIngresado;
    texto.value = "";
}

function copiar(){
    let copy = document.getElementById("mensaje").value;
    navigator.clipboard.writeText(copy).then(function(){
        alert("Mensaje copiado al portapapeles")
    })
}