function conferir() {
  let nome = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  var dataLocalStorage = localStorage.getItem('Usuarios');
  var resultData = JSON.parse(dataLocalStorage);
  let showAlert = true

  if (nome == "" || senha == "") {
    return alert("Campo vazio")
  } else { 
    resultData.forEach((e) => {
      if (nome == e.usuario && senha == e.senhaCad) {
        showAlert = false
        localStorage.setItem("ultimoUsu", e.usuario)
        return document.getElementById("botao").href = "mesas.html";
      }
    })
    
     if(showAlert == true) {
      alert('Usuario Invalido')
     }
  } 
}


function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
  var d = new Date,
    ano_atual = d.getFullYear(),
    mes_atual = d.getMonth() + 1,
    dia_atual = d.getDate(),

    ano_aniversario = +ano_aniversario,
    mes_aniversario = +mes_aniversario,
    dia_aniversario = +dia_aniversario,


    quantos_anos = ano_atual - ano_aniversario;

  if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
    quantos_anos--;
  }


  return quantos_anos < 0 ? 0 : quantos_anos;
}



function cadastrar() {

  var nomeCad = document.getElementById("nome").value;
  var emailCad = document.getElementById("email").value;
  var sobrenomeCad = document.getElementById("sobrenome").value;
  var usuario = document.getElementById("usuarioCadastro").value;
  var senhaCad = document.getElementById("senhaCad").value;
  var dataCad = document.getElementById("date").value;
  var genero = document.getElementById("select").value;
  var senhacon = document.getElementById("senhaCon").value;
  var termos = document.getElementById("term");

  debugger;
  var transformer = dataCad.split("-");

  var resultAno = idade(transformer[0], transformer[1], transformer[2]);


  if (resultAno < 18 || resultAno == 2021 || nomeCad == "" || emailCad == "" || sobrenomeCad == "" || usuario == "" || senhaCad == "" || genero == "Selecione" || senhacon != senhaCad) {

    alert("Idade invalida, senhas diferentes ou deixou algum campo em branco");

  }
  else if(termos.checked == false){
    alert("Você precisa aceitar os Termos");
  }
  else if (resultAno >= 18 && resultAno <= 90) {

    let usuarios = localStorage.getItem('Usuarios') || "[]"
    usuarios = JSON.parse(usuarios)

    let objUsuario = {
       usuario,
       senhaCad,
       nomeCad,
       sobrenomeCad,
       dataCad,
       emailCad,
       genero,
    }

    usuarios.push(objUsuario);
    localStorage.setItem('Usuarios', JSON.stringify(usuarios));

    alert("cadastrado")
    return document.getElementById("cadastro").href = "login.html"
  }

}


// fazer aparecer a senha
function senha() {

  debugger

  let check = document.getElementById("check");



  if (check.checked == true) {
    return document.getElementById("eye2").style = "display: block", document.getElementById("eye").style = "display: none", document.getElementById("senhaCad").type = "text";
  }
  else {

    return document.getElementById("eye").style = "display: block", document.getElementById("eye2").style = "display: none", document.getElementById("senhaCad").type = "password";

  }

}

function senha2() {

  debugger

  let check = document.getElementById("check1");



  if (check.checked == true) {

    return document.getElementById("eye4").style = "display: block", document.getElementById("eye3").style = "display: none", document.getElementById("senhaCon").type = "text";

  }
  else {

    return document.getElementById("eye3").style = "display: block", document.getElementById("eye4").style = "display: none", document.getElementById("senhaCon").type = "password";

  }

}

function senhal() {

  debugger

  let check = document.getElementById("checkl");



  if (check.checked == true) {

    return document.getElementById("eyelo").style = "display: block", document.getElementById("eyel").style = "display: none", document.getElementById("senha").type = "text";

  }
  else {

    return document.getElementById("eyel").style = "display: block", document.getElementById("eyelo").style = "display: none", document.getElementById("senha").type = "password";

  }

}