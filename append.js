//append.js

$(document).ready(function(){
    var personList=[];
    var personObj1= new person();
    var personObj2= new person();
    var personObj3= new person();
    //return personObj;
    
    personObj1.setFirstName("Upendra");
    personObj1.setLastName("Sharma");
    personObj1.setPhone("604-767-8584");
    personObj1.setEmail("add.upen@gmail.com");
    
    personObj2.setFirstName("Rabin");
    personObj2.setLastName("Sharma");
    personObj2.setPhone("604-767-8586");
    personObj2.setEmail("add.upen@gmail.com");
    
    personObj3.setFirstName("Bimal");
    personObj3.setLastName("Sharma");
    personObj3.setPhone("604-767-8784");
    personObj3.setEmail("add.upen@gmail.com");
    
    
    personList.push(personObj1);
    personList.push(personObj2);
    personList.push(personObj3);
    
    
    personList.forEach(function(x){
        x.testFunc();
    });
    
    
    //console.log(personList);
    $("#add" ).on("click", submit);

});
