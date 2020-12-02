alert("Hello");

var dog = {
    type: "Meltese",
    name: "Azor",
    color: "White",
    age: 11,
    gender: "male",
    description: function () {
        return this.name + " and it is" + this.age;

    }
};

document.getElementById("object").innerHTML = " <h1>The name of the dog is " + this.dog.name
    + "The name of the dog is" + this.dog.type
    + "The name of the dog is" + this.dog.color
    + "The gender of the dog is" + this.dog["gender"] +
    + dog.description()
    + "</h1>";
var keimeno = "";
for (var x in dog) {
    keimeno += dog[x] + ",";
}

document.getElementById('all').innerHTML = keimeno;

function Car(marka, model, year) {
    this.marka = marka;
    this.model = model;
    this.year = year;

}

var car1 = new Car("Fiat", "500", 2013);
var car2 = new Car("Toyota", "IQ", 2015);
var car3 = new Car("Nissan", "Micra", 2003);

console.log(car1);
console.log(car2);
console.log(car3);

document.getElementById("car").innerHTML = car1.marka + car1.model + car1.year;

function yolo() {
    document.querySelector(".lola").style.color = "pink";

}



function changeimage(x) {

    document.getElementById("myImage").src = x


}

function validate(){
    var x = document.forms["form1"]["name"].value;
    if(x==="")
        alert("Give a anme");
        return false;
}
