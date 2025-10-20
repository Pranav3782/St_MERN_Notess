function val2(){
    var fir=document.myform.first.value;
    var las=document.myform.last.value;
    var mid=document.myform.middle.value;
    var phone=document.myform.ph.value;
    var uname=document.myform.username.value;
    var pass=document.myform.password.value;
    var cpass=document.myform.confirmPassword.value;

    if(fir==""||las==""||phone==""||uname==""||pass==""||cpass==""){
        alert("Cannot be empty");
        return false;
    }
    if (pass !== cpass) {
    alert("Passwords do not match.");
    return false;
}
}