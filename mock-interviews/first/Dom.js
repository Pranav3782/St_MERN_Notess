const buttonValue=document.getElementById("button1");
const divValue=document.getElementById("Div")


buttonValue.addEventListener("click", ()=>{
    const para=document.createElement("p");
    para.textContent="Clicked ";
    divValue.append(para);
    buttonValue.textContent="Clicked";
    buttonValue.disabled=true;
    

})

