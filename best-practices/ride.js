// Array of driver objects
const DRIVERS = [
  { id: "D001", name: "Arjun", available: true },
  { id: "D002", name: "Meera", available: true },
  { id: "D003", name: "Rahul", available: false }
];

// Array of rider objects
const RIDERS = [
  { id: "R001", name: "Sundeeep", walletBalance: 1000 },
  { id: "R002", name: "Keerthi", walletBalance: 200 }
];

// Empty array to store ride objects
let RIDES = [];



function matchDriver(drivers){
    for(let index of DRIVERS){
        if(index.available===true){
            return index;
        }   
    }
    return "No drivers available";

}
//console.log("Rides: ",RIDES);



function calculateFare(distance, ratePerKm){
    let calculate=distance*ratePerKm;
    //return calculate;
    //console.log(calculate);
    return calculate;

}
//calculateFare(10, 20);

// let rider={
//     id: "R001", 
//     name: "Sundeeep", 
//     walletBalance: 200 
// }

function processPayment(rider, fare){
    if(rider.walletBalance>fare){
        rider.walletBalance=rider.walletBalance-fare;
       // console.log(rider);
       return rider;

    }
   if(rider.walletBalance<fare){
    return "Insufficients funds";
   }
    return null;
}




//let updatedrides={};
function createRide(rider, driver, distance, fare){
    let newride={
    rideId:"001",
    riderId:rider.id,
    driverId:driver.id,
    distance:distance,
    fare:fare,
    status:"CONFIRMED"

}

return newride;

}



let rides={};
function saveRide(rides, ride, driver){
    rides.push(ride,driver);
    driver.available=false;
    return driver;

}
// console.log(rides);



//main function

function requestRide(riderId, distance){
    let rider1;
    for(let index1 of RIDERS){
    if(index1.id==riderId){
        rider1=index1.id;
        //console.log(rider1);
    }}
    const availaleDrivers=matchDriver(DRIVERS);
    //console.log(availaleDrivers)
    const fareDistance=calculateFare(distance, 20);
    //console.log(fareDistance);
    const process=processPayment({ id: "R001", name: "Sundeeep", walletBalance: 1000 }, 200);
    //console.log(process);
    
const create=createRide(
  { id: "R001", name: "Sundeeep", walletBalance: 800 },
  { id: "D001", name: "Arjun", available: true },
  10,
  200
);
const save=saveRide([], { rideId: "001", riderId: "R001", driverId: "D001", distance: 10, fare: 200, status: "CONFIRMED" },
         { id: "D001", name: "Arjun", available: true });
         //console.log(save);
         console.log("Rider confirmed: ",create);
         console.log("Updated Rider: ",process);
         console.log("Updated Driver: ",save);

}

requestRide("R001", 10);