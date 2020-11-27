alert("Hello");

var dog = {
    type:"Meltese",
    name: "Azor",
    color: "White",
    age: 11,
    gender:"male",
    description: function() {
        return this.name +" and it is" + this.age;

    }
};

document.getElementById("object").innerHTML = " <h1>The name of the dog is "+this.dog.name
+"The name of the dog is" +this.dog.type
+"The name of the dog is" +this.dog.color
+"The gender of the dog is"+this.dog["gender"]+
+ dog.description()
+"</h1>" ;