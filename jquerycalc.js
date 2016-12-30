"use strict"

$(document).ready(function(){
    function SubmitCalc(){
        event.preventDefault();
   var x,y;
        
    x=$("#inp1").val();
    y=$("#inp2").val();
        console.log(x);
        console.log(y);
        var Calc=new Calculator();
        Calc.setx(+x);
        Calc.sety(+y);
       var result= Calc.testingOutput();
        
        $("#results").html(result);
    }
    
$("#Submit").on("click",SubmitCalc);

});
