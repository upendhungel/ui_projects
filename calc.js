
"use strict"

var add = function(calculate){
 var num1 =  document.getElementById('num1').value; 
  var num2 =  document.getElementById('num2').value; 
 document.getElementById('calculate').innerHTML= parseInt(num1) + parseInt(num2);
}

var subtraction = function(calculate){
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  document.getElementById('calculate').innerHTML= parseInt(num1)  -  parseInt(num2);
}

var multiply = function(calculate){
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  document.getElementById('calculate').innerHTML= parseInt(num1) * parseInt(num2);
}

var divide = function(calculate){
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  document.getElementById('calculate').innerHTML= parseInt(num1) / parseInt(num2);

}