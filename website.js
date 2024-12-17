function validemail(){
var email = document.getElementById("email").value;
if(email==="aniketdhamange29@gmail.com"){
    document.getElementById("password").disabled=false;
    document.getElementById("password").focus();
}
}

function onpass(){
    // var pass =document.getElementById("password").value;
    // if(pass==="Aniket@1234"){
        document.getElementById("login").disabled=false;
        // document.getElementById("login").focus();
    // }
}
var count=0;
function login(){
    var pass =document.getElementById("password").value;
if(pass==="Aniket@1234"){
document.getElementById("success").innerHTML="login success"
window.location.href = "MyApp/app.html";
}
else{
count++;
if(count < 3){
    document.getElementById("success").innerHTML=`attemt left ${3-count}`;
}else{
document.getElementById("email").disabled=true;
document.getElementById("password").disabled=true;
document.getElementById("success").innerHTML=`attemt left ${3-count} <br> your account has been blocked`;
document.getElementById("login").disabled =true;
}

}
}