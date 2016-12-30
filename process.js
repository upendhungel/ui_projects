
"use strict";
//alert("Hello world");
function processform(){
    event.preventDefault();
    var FirstName, LastName, Password, Address,xresults,Cars,def,flag=false;
    FirstName = document.getElementById("FirstName").value;
    LastName=document.getElementById("LastName").value;
    Address=document.getElementById("Address").value;
    Password=document.getElementById("Password").value;
    xresults= ("FirstName-->"+FirstName);
    xresults+=("<br>LastName-->"+LastName);
    xresults+=("<br>Address-->"+Address);
    xresults+=("<br>Password-->"+Password);
    xresults+=("<br>Cars-->"+Cars);
    def="Please enter the First Name";
    var ghi="Please enter the Last Name";
    var add="Please enter Address";
    var pass="Please enter password";
    var gen="Please check any one";
    
    console.log(FirstName.length);
    if(FirstName.length==0){
        flag=true;
        FirstNameError(def);
        
    
    }
    if(Address.length==0){
        flag=true;
        AddressError(add);
        

    }
    if(LastName.length==0){
        flag=true;
        LastNameError(ghi);
       

    }
    if(Password.length==0){
        flag=true;
        PasswordError(pass);

    }
    if((document.getElementById("genMale").checked==false) && (document.getElementById("genFemale").checked==false))
    {
        flag=true;
         gender(gen);
    }
    if(flag){
    alert("Milena");
  // FirstNameError(def);
    }
    else{ 
        alert("Milyo"); 
    results(xresults);
    }
    if(FirstName=="Umesh"){
        alert("GOOD");
    }
    
}
function results(paramResults){
    document.getElementById("Results").innerHTML=paramResults;
}
function FirstNameError(abc){
    document.getElementById("Errors").innerHTML=abc;
    document.getElementById("Errors").style.display="block";
    document.getElementById("FirstName").style.backgroundColor="red";
}
function LastNameError(h){
    document.getElementById("Nepal").innerHTML=h;
    document.getElementById("Nepal").style.display="block";
    document.getElementById("LastName").style.backgroundColor="red";
    
}
function AddressError(i){
    document.getElementById("Add1").innerHTML=i;
document.getElementById("Add1").style.display="block";
    document.getElementById("Address").style.backgroundColor="red";
}
function PasswordError(p){
    document.getElementById("Pass1").innerHTML=p;
document.getElementById("Pass1").style.display="block";
    document.getElementById("Password").style.backgroundColor="red";
}
function gender(ab)
{
    document.getElementById("Gender").innerHTML=ab;
    document.getElementById("Gender").style.display="block";
}
