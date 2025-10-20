function val(){
    var uname=document.myform.username.value;
    var pass=document.myform.password.value;
if (uname==""|| uname==null){
    alert("User name cannot be empty");
    return false;
}
if(pass.length<6)
{
    alert("password cannot be less than 6");
    return false;
}

    console.log("Else block");
}
