 "use strict";

function person(){
    var firstName, lastName, phone, email;
    this.setFirstName=function(fName){
        firstName=fName;
    
}

    this.setLastName=function(lName) {
        lastName=lName;
    }
    
    this.setPhone=function(ph){
        phone=ph;
    }
    
    this.setEmail=function(em){
        email=em;
    }

    this.getFirstName=function(){
        return firstName;

    }

    this.getLastName=function(){
        return lastName;
    }
//getPhone check the function name here
    this.Phone=function(){
        //check the spelling of variable
        
        return Phone;
    }

    this.getEmail=function(){
        return email;
    }


    this.testFunc=function(){

    console.log("RENDERING OBJECT");
    console.log(this.getFirstName())+"<br>";
    console.log(this.getLastName())+"<br>";
    console.log(this.getPhone())+"<br>";
    console.log(this.getEmail())+"<br>";

    }


}
    

