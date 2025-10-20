// creating objects

//Step 1 : create a bucket,database !
// const STUDENT_TRIBE=[];
// console.log(STUDENT_TRIBE);

//create individual objects
// const Surya={
//     name:"Surya pranav",
//     dob:"13-05-2004",
//     school:"Sri chaitanya",
//     college:"MVSR"
// }
// const Pranav={
//     name:"Surya pranav",
//     dob:"13-05-2004",
//     school:"Sri chaitanya",
//     college:"MVSR"
// }

//push the objects into Student Tribe
// STUDENT_TRIBE.push(Surya,Pranav);


//Using functions

const STUDENT=[];

const Pranav={
    name:"Surya pranav",
    dob:"13-05-2004",
    school:"Sri chaitanya",
    college:"MVSR"
}
const raj={
    name:"Raja",
    dob:"30-07-2004",
    school:"Sri chaitanya",
    College:"MVSR "
}
function database(Value){
    STUDENT.push(Value);

}

console.log(STUDENT);
database(Pranav);
database(raj);
