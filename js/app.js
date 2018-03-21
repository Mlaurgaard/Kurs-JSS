var heading = document.querySelector('h1');
var customHeader = "something"
heading.textContent = customHeader;


var number1 = 2;
var number2= 3;
var text = "fancy shit";
var myList = ["one", "two", "three"]
var myObject = {};


function multiplyByTwo(n1, n2){
    var val = n2 + n1;
   return val * 2;
}

function addText(){
    var el = document.getElementById("textChange");

    if (el.innerHTML == "S U C C"){
        el.innerHTML = null;
    } else {
        el.innerHTML = "P O O P"
    }
}