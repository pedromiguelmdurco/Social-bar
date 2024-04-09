// menu mesas 
function mesasNone() {
  var x = document.getElementById("mesas");
  var y = document.getElementById("grupos");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

function gruposNone() {
  var x = document.getElementById("grupos");
  var y = document.getElementById("mesas");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

// video 1
function startVideoFromCamera1() {
  const specs = {video:{width:800}}
  navigator.mediaDevices.getUserMedia(specs).then(stream => {
    const videoElement = document.querySelector("#video1")
    videoElement.srcObject = stream

  }).catch(error => { console.log(error) })
}

function closeVideoFromCamera1() {
  const videoElement = document.querySelector("#video1")
  videoElement.srcObject = null
}

// video 2

function startVideoFromCamera2() {
  const specs = {video:{width:800}}
  navigator.mediaDevices.getUserMedia(specs).then(stream => {
    const videoElement = document.querySelector("#video2")
    videoElement.srcObject = stream

  }).catch(error => { console.log(error) })
}

function closeVideoFromCamera2() {
  const videoElement = document.querySelector("#video2")
  videoElement.srcObject = null
}

// video3
function startVideoFromCamera3() {
  const specs = {video:{width:800}}
  navigator.mediaDevices.getUserMedia(specs).then(stream => {
    const videoElement = document.querySelector("#video3")
    videoElement.srcObject = stream

  }).catch(error => { console.log(error) })
}

function closeVideoFromCamera3() {
  const videoElement = document.querySelector("#video3")
  videoElement.srcObject = null
}
// video4
function startVideoFromCamera4() {
  const specs = {video:{width:800}}
  navigator.mediaDevices.getUserMedia(specs).then(stream => {
    const videoElement = document.querySelector("#video4")
    videoElement.srcObject = stream

  }).catch(error => { console.log(error) })
}

function closeVideoFromCamera4() {
  const videoElement = document.querySelector("#video4")
  videoElement.srcObject = null
}

// chat1
//esse diploma:chat1/chat2,escr1

function chat1(){
    
  var dataLocalStorage = localStorage.getItem('diploma');
  var resultData = JSON.parse(dataLocalStorage);

  resultData.forEach((i) => {
      var template = "<div class='message'>" +
      "<p>"+i.resultData1+":</p>"+
      "<p class='text'>" + i.escrita + "</p>" + "<div class='clear'></div>" + "</div>"
      return document.getElementById("chat1").innerHTML += template;

  })
}

function escreven1(){

  return document.getElementById("escr1").innerHTML = "Digitando...";
}
function escre1(){
  return document.getElementById("escr1").innerHTML = null;
}

function enviar1() {
  debugger;
  let escrita = document.getElementById("chat2").value;
  var dataLocalStorage1 = localStorage.getItem('ultimoUsu');
  var resultData1 = dataLocalStorage1;

  let chat = localStorage.getItem('diploma') || "[]"
  chat = JSON.parse(chat)

  let usuariomen = {
    resultData1,
    escrita,
  }

  chat.push(usuariomen);

  localStorage.setItem('diploma', JSON.stringify(chat));

  var dataLocalStorage = localStorage.getItem('diploma');
  var resultData = JSON.parse(dataLocalStorage);
  

  let cont = chat.length;
  cont -= 1;

  var template = "<div class='message'>" +
      "<p>"+resultData1+":</p>"+
      "<p class='text'>" + resultData[cont].escrita + "</p>" + "<div class='clear'></div>" + "</div>"

  while (cont < chat.length) {
      return document.getElementById("chat1").innerHTML += template, document.getElementById("chat2").value = null;

  }

}

function limpar1(){
  localStorage.removeItem('diploma');
  return document.getElementById("chat1").innerHTML = null;
}

//chat2
//cerveja?quero:chat3/cha4,escr2

function chat2(){
    
  var dataLocalStorage = localStorage.getItem('cerveja');
  var resultData = JSON.parse(dataLocalStorage);
 
  resultData.forEach((i) => {
      var template = "<div class='message'>" +
      "<p>"+i.resultData1+"</p>"+
      "<p class='text'>" + i.escrita + "</p>" + "<div class='clear'></div>" + "</div>"
      return document.getElementById("chat3").innerHTML += template;

  })
}

function escreven2(){

  return document.getElementById("escr2").innerHTML = "Digitando...";
}
function escre2(){
  return document.getElementById("escr2").innerHTML = null;
}

function enviar2() {
  debugger;
  let escrita = document.getElementById("chat4").value;

  let chat = localStorage.getItem('cerveja') || "[]"
  chat = JSON.parse(chat)
  var dataLocalStorage1 = localStorage.getItem('ultimoUsu');
  var resultData1 = dataLocalStorage1;

  let usuariomen = {
    resultData1,
    escrita,
  }

  chat.push(usuariomen);

  localStorage.setItem('cerveja', JSON.stringify(chat));

  var dataLocalStorage = localStorage.getItem('cerveja');
  var resultData = JSON.parse(dataLocalStorage);
  let cont = chat.length;
  cont -= 1;

  var template = "<div class='message'>" +
      "<p>"+resultData1+":</p>"+
      "<p class='text'>" + resultData[cont].escrita + "</p>" + "<div class='clear'></div>" + "</div>"

  while (cont < chat.length) {
      return document.getElementById("chat3").innerHTML += template, document.getElementById("chat4").value = null;

  }

}

function limpar2(){
  localStorage.removeItem('cerveja');
  return document.getElementById("chat3").innerHTML = null;
}

//chat3
//cara de cavalo:chat5/chat6,escr3

function chat3(){
    
  var dataLocalStorage = localStorage.getItem('cavalo');
  var resultData = JSON.parse(dataLocalStorage);

  resultData.forEach((i) => {
      var template = "<div class='message'>" +
      "<p>"+i.resultData1+":</p>"+
      "<p class='text'>" + i.escrita + "</p>" + "<div class='clear'></div>" + "</div>"
      return document.getElementById("chat5").innerHTML += template;

  })
}

function escreven3(){

  return document.getElementById("escr3").innerHTML = "Digitando...";
}
function escre3(){
  return document.getElementById("escr3").innerHTML = null;
}

function enviar3() {
  debugger;
  let escrita = document.getElementById("chat6").value;
  var dataLocalStorage1 = localStorage.getItem('ultimoUsu');
  var resultData1 = dataLocalStorage1;

  let chat = localStorage.getItem('cavalo') || "[]"
  chat = JSON.parse(chat)

  let usuariomen = {
    resultData1,
    escrita,
  }

  chat.push(usuariomen);

  localStorage.setItem('cavalo', JSON.stringify(chat));

  var dataLocalStorage = localStorage.getItem('cavalo');
  var resultData = JSON.parse(dataLocalStorage);
 

  let cont = chat.length;
  cont -= 1;

  var template = "<div class='message'>" +
      "<p>"+resultData1+":</p>"+
      "<p class='text'>" + resultData[cont].escrita + "</p>" + "<div class='clear'></div>" + "</div>"

  while (cont < chat.length) {
      return document.getElementById("chat5").innerHTML += template, document.getElementById("chat6").value = null;

  }

}

function limpar3(){
  localStorage.removeItem('cavalo');
  return document.getElementById("chat5").innerHTML = null;
}

//chat4
//Rinha de galo:chat7/chat8,escr4

function chat4(){
  debugger;
  var dataLocalStorage = localStorage.getItem('galo');
  var resultData = JSON.parse(dataLocalStorage);

  resultData.forEach((i) => {
      var template = "<div class='message'>" +
      "<p>"+i.resultData1+":</p>"+
      "<p class='text'>" + i.escrita + "</p>" + "<div class='clear'></div>" + "</div>"
      return document.getElementById("chat7").innerHTML += template;

  })
}

function escreven4(){

  return document.getElementById("escr4").innerHTML = "Digitando...";
}
function escre4(){
  return document.getElementById("escr4").innerHTML = null;
}

function enviar4() {
  debugger;
  let escrita = document.getElementById("chat8").value;
  var dataLocalStorage1 = localStorage.getItem('ultimoUsu');
  var resultData1 = dataLocalStorage1;

  let chat = localStorage.getItem('galo') || "[]"
  chat = JSON.parse(chat)

  let usuariomen = {
      resultData1,
      escrita,
  }

  chat.push(usuariomen);

  localStorage.setItem('galo', JSON.stringify(chat));

  var dataLocalStorage = localStorage.getItem('galo');
  var resultData = JSON.parse(dataLocalStorage);
  

  let cont = chat.length;
  cont -= 1;

  var template = "<div class='message'>" +
      "<p>"+resultData1+":</p>"+
      "<p class='text'>" + resultData[cont].escrita + "</p>" + "<div class='clear'></div>" + "</div>"

  while (cont < chat.length) {
      return document.getElementById("chat7").innerHTML += template, document.getElementById("chat8").value = null;

  }

}

function limpar4(){
  localStorage.removeItem('galo');
  return document.getElementById("chat7").innerHTML = null;
}



