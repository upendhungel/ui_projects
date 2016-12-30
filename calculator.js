"use strict";


function Calculator(){
    var x;
    var y;
   
    //mutators
    this.setx =function(valx){
        x=valx;
    }
    
    this.sety =function(valy){
        y=valy;
    }
    
    //accessors
    this.getx =function(){
        return x;
    }
    
    this.gety =function(){
        return y;
    }
 
    this.add =function(){
        return x+y;
    }
    this.subtract =function(){
        return x-y;
    }
    this.multiply =function(){
        return x*y;
    }
    this.divide =function(){
        return x/y;
    }
    this.testingOutput =function(){
        var result= "Addition="+this.add()+"<br>";
         result+="Subtraction="+this.subtract()+"<br>";
         result+="Multiplication="+this.multiply()+"<br>";
         result+="Division="+this.divide()+"<br>";
        console.log(this.add());
        console.log("Subtract="+this.subtract());
        console.log("Multiply="+this.multiply());
        console.log("Division="+this.divide());
        return result;
    
    }
    
    /*
}
function process(){
    var result;
var calculatorObj =new Calculator();

calculatorObj.setx(3);
calculatorObj.sety(2);
result+= "x="+calculatorObj.getx();
result+= "y="+calculatorObj.gety();
result+=calculatorObj.testingOutput();

document.getElementById("Results").innerHTML=result;
*/
    
}   