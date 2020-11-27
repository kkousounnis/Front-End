function function1() {
    alert("kwstas")
}

function funct() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    var choice = document.getElementById("choice").value;
    var pol;
    switch (choice) {
        case "*":
            pol = num1 * num2;
            break;
        case "+":
            pol = num1 + num2;
            break;
        case "-":
            pol = num1 - num2;
            break;
        case "/":
            if(num2!=0)
                pol = num1/num2;
            break;
    }


    document.getElementById("result").innerHTML = "Result is" + pol;
}
function check(){
    var x = document.form1.user.value;

    if(x=="PASSWORD"){
        document.getElementById("Check").innerHTML = "WrOng password";
        document.getElementById("Check").style.color = red;
    }else{
        document.getElementById("Check").innerHTML = "Correct password";

    }


}
document.getElementById("button1").addEventListener("click",function(){
    alert("This is an example")
});

var loopa = "";
var i;
for (i=0; i<5;i++){

    loopa+="Number"+i;
}
console.log(loopa);

