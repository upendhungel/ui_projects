//alert("testing append");
function submit(){
    event.preventDefault();
    
    
    
    var personObj=new Person();
    
    personObj.setFirstName($("#firstName").val());
    personObj.setLastName($("lastName").val());
    personObj.setPhone($("phone").val());
    personObj.setEmail($("email").val());
    
    console.log("TEST FOR OBJECT");
    
    var result=personObj.getFirstName()+"<br>";
    result+=personObj.getLastName()+"<br>";
    result=personObj.getPhone()+"<br>";
    result=personObj.getEmail()+"<br>";
    console.log(result);
    

}

function submit(){
    render();
    
}

function render(){
  $("#resultTbl tbody").html("checking");
}
