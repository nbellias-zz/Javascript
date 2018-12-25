let counter = 0;

function z() {
    let myStrings = ["Hello World", "Γειά σας", "Γειά σου John"];
    let colors = ["red", "blue", "magenta"];

    document.getElementById("myDiv").innerHTML = myStrings[counter];
    document.getElementById("myDiv").style.color = colors[counter];
    
    if (counter == 2) {
        counter = -1;
    }
    counter++;
}

function zRandom() {
    let myStrings = ["Hello World", "Γειά σας", "Γειά σου John"];
    let colors = ["red", "blue", "magenta"];
    let rnd = Math.floor(Math.random() * Math.floor(3));
    
    document.getElementById("myDiv1").innerHTML = myStrings[rnd];
    document.getElementById("myDiv1").style.color = colors[rnd];
}

function myDice(){
    let diceIcons = ["img/dice-six-faces-one.png", 
    "img/dice-six-faces-two.png", 
    "img/dice-six-faces-three.png",
    "img/dice-six-faces-four.png",
    "img/dice-six-faces-five.png",
    "img/dice-six-faces-six.png"];

    let rnd1 = Math.floor(Math.random() * Math.floor(6));
    document.getElementById("dice1").src = diceIcons[rnd1];

    let rnd2 = Math.floor(Math.random() * Math.floor(6));
    document.getElementById("dice2").src = diceIcons[rnd2];
}

var myObject = function(){
    let person = {
        name: "Kostas",
        address: "Plateia Karaiskaki 2",
        dob: "1990-02-12",
        print: function(){
            return "<h1>" + this.name + ", " + this.address + ", " + this.dob + "</h1>";
        },
        printJSON: function(){
            return JSON.stringify(this);
        },
        age: function(){
            let today = new Date().getFullYear();
            let dateOfBirth = new Date(this.dob).getFullYear();
            return today - dateOfBirth;
        }
    };
    person.name = "Giorgos";
    document.querySelector("#person").innerHTML = person.print() + " <p>" + person.printJSON() + "</p>";
}

let alpha = function(v){
    return v * v;
}

let bravo = function(m, alpha){
    let k = m + 1;
    return alpha(k);
}

let bravo1 = function(m){
    let k = m + 1;
    return alpha(k);
}

function myFunc(j){
    let arr = [];
    for(let i = 0; i <= j; i++){
        //arr.push(bravo(i, alpha));
        arr[i] = bravo(i, alpha);
    }
    return arr;
}

function myFunc1(j){
    let arr = [];
    for(let i = 0; i <= j; i++){
        //arr.push(bravo(i, alpha));
        arr[i] = bravo1(i);
    }
    return arr;
}

console.log(myFunc(4));
console.log(myFunc1(4));

var myFunc2 = function(){
    alert(document.getElementById("mytext").value);
}