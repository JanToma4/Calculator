window.onload = function() {
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var zero = document.getElementById("zero");
    var plus = document.getElementById("plus");
    var sub = document.getElementById("sub");
    var divide = document.getElementById("divide");
    var mult = document.getElementById("mult");
    var equal = document.getElementById("equal");
    var clear = document.getElementById("clear");
    var screen = document.getElementsByClassName("screen");
    var exp = "";
    
      
    one.onclick = function() {
        screen[0].innerHTML += "1";
        exp += "1";
    };
    two.onclick = function() {
        screen[0].innerHTML += "2";
        exp += "2";
    };
    three.onclick = function() {
        screen[0].innerHTML += "3";
        exp += "3";
    };
    four.onclick = function() {
        screen[0].innerHTML += "4";
        exp += "4";
    };
    five.onclick = function() {
        screen[0].innerHTML += "5";
        exp += "5";
    };
    six.onclick = function() {
        screen[0].innerHTML += "6";
        exp += "6";
    };
    seven.onclick = function() {
        screen[0].innerHTML += "7";
        exp += "7";
    };
    eight.onclick = function() {
        screen[0].innerHTML += "8";
        exp += "8";
    };
    nine.onclick = function() {
        screen[0].innerHTML += "9";
        exp += "9";
    };
    zero.onclick = function() {
        screen[0].innerHTML += "0";
        exp += "0";
    };
    plus.onclick = function() {
        screen[0].innerHTML += "+";
        exp += "+";
    };
    sub.onclick = function() {
        screen[0].innerHTML += "-";
        exp += "-";
    };
    divide.onclick = function() {
        screen[0].innerHTML += "/";
        exp += "/";
    };
    mult.onclick = function() {
        screen[0].innerHTML += "*";
        exp += "*";
    };
    equal.onclick = function() {
        calculate();
    };
    clear.onclick = function() {
        screen[0].innerHTML = " ";
        exp = "";
    };
    
    function calculate() {
        screen[0].innerHTML = eval(exp); 
    }
}