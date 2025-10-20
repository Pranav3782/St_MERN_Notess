const formTag=document.getElementById("form1")
const userName=document.getElementById("username")
const password=document.getElementById("password")
const age=document.getElementById("age")
const cpassword=document.getElementById("cpassword")
const mail=document.getElementById("email");
const div=document.getElementById("Divtag")



formTag.addEventListener("submit", (event)=>{
    event.preventDefault();

    const user={
        "Username":userName.value,
        "Password":password.value,
        "Age":age.value,
        "Confirm password":cpassword.value,
    

        
    }

    console.log(user);
    
})