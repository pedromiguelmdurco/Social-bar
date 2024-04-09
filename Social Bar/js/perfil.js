function avaBar() {
    var a = document.getElementById("avaliacaoBar");
    var b = document.getElementById("sobreSBar");
    var c = document.getElementById("fotosSBar");
    var d = document.getElementById("amigosSBar");

    if (a.style.display === "block") {
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
    } else {
      a.style.display = "block";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
    }
  }

  function sobreBar() {
    var a = document.getElementById("avaliacaoBar");
    var b = document.getElementById("sobreSBar");
    var c = document.getElementById("fotosSBar");
    var d = document.getElementById("amigosSBar");

    if (b.style.display === "block") {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    } else {
        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "none";
        d.style.display = "none";
    }
  }

  function fotosBar() {
    var a = document.getElementById("avaliacaoBar");
    var b = document.getElementById("sobreSBar");
    var c = document.getElementById("fotosSBar");
    var d = document.getElementById("amigosSBar");

    if (c.style.display === "block") {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    } else {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "block";
        d.style.display = "none";
    }
  }
  function amigosBar() {
    var a = document.getElementById("avaliacaoBar");
    var b = document.getElementById("sobreSBar");
    var c = document.getElementById("fotosSBar");
    var d = document.getElementById("amigosSBar");

    if (d.style.display === "block") {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
    } else {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "block";
    }
  }