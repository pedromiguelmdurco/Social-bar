
function chat(){
    
    var dataLocalStorage = localStorage.getItem('Usuarios');
    var resultData = JSON.parse(dataLocalStorage);

    

    resultData.forEach((i) => {
        var template = "<div class='message'>" +
        "<p>Usuario9999:</p>"+
        "<p class='text'>" + i.escrita + "</p>" + "<div class='clear'></div>" + "</div>"
        return document.getElementById("chat1").innerHTML += template;

    })
}

function escreven(){
  
    return document.getElementById("escr").innerHTML = "Digitando...";
}
function escre(){
    return document.getElementById("escr").innerHTML = null;
}

function enviar() {
    debugger;
    let escrita = document.getElementById("chat2").value;

    let chat = localStorage.getItem('Usuarios') || "[]"
    chat = JSON.parse(chat)

    let usuariomen = {
        escrita,
    }

    chat.push(usuariomen);

    localStorage.setItem('Usuarios', JSON.stringify(chat));

    var dataLocalStorage = localStorage.getItem('Usuarios');
    var resultData = JSON.parse(dataLocalStorage);
    let cont = chat.length;
    cont -= 1;

    var template = "<div class='message'>" +
        "<p>Usuario9999:</p>"+
        "<p class='text'>" + resultData[cont].escrita + "</p>" + "<div class='clear'></div>" + "</div>"

    while (cont < chat.length) {
        return document.getElementById("chat1").innerHTML += template, document.getElementById("chat2").value = null;

    }

}

function limpar(){
    localStorage.clear('Usuarios');
    return document.getElementById("chat1").innerHTML = null;
}


