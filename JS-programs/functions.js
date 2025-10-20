function getName(firstname){
    const lastName="Pranav"
    return `${firstname} ${lastName}`;
}


let fullName=getName("Surya");
console.log(fullName);

// Arrow functions.
const Name=(name)=>{
    console.log("Names() is called")
}
Name();