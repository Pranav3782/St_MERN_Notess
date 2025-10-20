function val1(){
    var name=document.myform1.Fullname.value;
    var mail=document.myform1.Email.value;
    var mess=document.myform1.Message.value;

    if (name=="" || mail=="" || mess==""){
        alert("Fields are empty ");
        return false;
    }
    console.log("outside")

}