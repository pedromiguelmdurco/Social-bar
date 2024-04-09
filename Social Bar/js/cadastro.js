function changeSelect(data) {
    var x = document.getElementById("off-personalizado");


    if (data === "Personalizado") {
        x.style.display = "block";
    }

    else {
        x.style.display = "none";
    }

}
function premiumLog() {
    var x = document.getElementById("premium");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      y.style.display = "none";
    }
  }