function in_sub(){
    var name = document.getElementById("fname").value;
    var email =  document.getElementById("ename").value;
    var numberph = document.getElementById("pno").value;
    var passwordvar =  document.getElementById("password").value;
 
    localStorage.setItem("username",name);
    localStorage.setItem("email",email);
    localStorage.setItem("Phone_number",numberph);
    localStorage.setItem("password",passwordvar);
 
    document.getElementById("fname").innerHTML = "";
    document.getElementById("ename").innerHTML = "";
    document.getElementById("pno").innerHTML = "";
    document.getElementById("password").innerHTML = "";
    window.location="kwitter_room.html";
 }