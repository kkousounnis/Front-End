function myFunction() {
  var x = document.getElementById("myDIV").style.display = "none";

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}

var i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5)

var t = ["London", "Paris", "Greece"];
var concatanation = "<ul>";
do {

  console.log(concatanation);
  concatanation += "<li>" + t[i];
  i += 1;
} while (i < 3)
document.getElementById("table").innerHTML = concatanation;

/* ------------------------------------------------------------------------------ */

function order() {
  var selected = new Array();

  var choices = document.getElementById("pizza").getElementsByTagName("input");

  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      selected.push(choices[i].value);
    }

  }

  document.getElementById("showingredients").innerHTML = selected;

}
/*--------------------------------------------------------------------------------- */

let mypass1 = document.getElementById("pass").value;
var uppercase = /[A-Z]/g;

var chara = document.getElementById("Kefalaio");
var sumvolo = document.getElementById("sumbolo");

if(mypass1.match(uppercase))_{
  kefalaio.classList.remove("invalid");
  kefalaio.classList.add("valid");
  

}

































