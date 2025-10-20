//console.log("functional programming... ");

console.log("Functional Programming...");


// SUNDEEEP Details DB
let SUNDEEEP_WALLET_BALANCE = 500000;
const SUNDEEEP_ADDRESSES = [
    {
        id: "SUNDEEEP001",
        flatNumber: "105",
        buildingName: "Sri Mallikarjuna PG",
        street: "Bollineni Homes",
        pincode: "500072",
        landmark: "near sai baba temple",
        city: "hyderabad",
        state: "TG"
    }, 
    {
        id: "SUNDEEEP002",
        flatNumber: "201",
        buildingName: "ST HQ",
        street: "DMART Street",
        pincode: "500075",
        landmark: "near zudio",
        city: "hyderabad",
        state: "TG"
    }, 

]


// Platform Details Database
const DISCOUNT_MAPPINGS = {
    "FIRSTORDER": 10,
    "XMAS30": 30
}

const DELIVERY_PARTNERS = [
    {
        id: "DEL001",
        name: "Sarvesh",
        drops: [] // orders created will be pushed here to be delivered!
    },
    {
        id: "DEL002",
        name: "Rajesh",
        drops: []
    }
] 

const ORDERS = [];

// Steps of Order placement and it's processing
/**
 * 1. Add to Cart
 * 2. Applying the Discount Coupons
 * 3. Selecting an address
 * 4. Payment processing
 * 5. Order is created/ placed
 * 6. Delivery tracking
 * 7. Feedback
 * 8. Order is successfully completed!
 */
function placeAnOrder(orderItems, discountCoupon, addressId) {

    // Step 1: Create total payable price to pay for placing an order.
    const discountCouponPercentage = DISCOUNT_MAPPINGS[discountCoupon];
    let totalPrice = 0;
    
    for(const item in orderItems){
        // console.log("Item: ", orderItems[item]);
        let price = orderItems[item].price * orderItems[item].quantity;
        // console.log(price);
        totalPrice = totalPrice + price;
    }

    console.log("Total Price: 1 ", totalPrice);

    let totalPayablePriceAfterDiscountDeduction = null;

    if(discountCoupon){
        totalPayablePriceAfterDiscountDeduction = totalPrice  - totalPrice * (discountCouponPercentage/ 100);
        // console.log("Total payable: ", totalPayablePriceAfterDiscountDeduction);
    
    
        // Check whether customer wallet posses the above ammount to pay for an  order.
        if(totalPayablePriceAfterDiscountDeduction < SUNDEEEP_WALLET_BALANCE){
    
            // cut the ammount from the SUNDEEEP wallet
            SUNDEEEP_WALLET_BALANCE = SUNDEEEP_WALLET_BALANCE - totalPayablePriceAfterDiscountDeduction
        }
    }
    

    // console.log("SUNDEEEP Wallet Balance: ", SUNDEEEP_WALLET_BALANCE);

    let deliveryAddress = null;

    for (const address of SUNDEEEP_ADDRESSES) {
        if(address.id === addressId){
            deliveryAddress = address
        }
    }

    // create an order
    const newOrder = {
        orderId: "001",
        orderPrice: totalPayablePriceAfterDiscountDeduction,
        deliveryAddress: deliveryAddress,
        status: "PLACED"
    }

    // Order Statuses: PLACED, CANCELLED, PACKAGED, SHIPPED, OUT_FOR_DELIVERY, DELIVERED, NOT_DELIVERED 

    newOrder.deliveryPartner = "DEL001";

    for (const deliveryPartner of DELIVERY_PARTNERS){
        if(deliveryPartner.id === "DEL001"){
            deliveryPartner.drops.push(newOrder);
        }
    }
    
    ORDERS.push(newOrder);

    // console.log("ORDERS: ", ORDERS);
    // console.log("DELIVERY PARTNER: ", DELIVERY_PARTNERS);

    // console.log("Order Created Successfully!", createdOrder);
}

const SUNDEEEP_CART_ITEMS = [
    {
        name: "0 to 1",
        price: 100,
        quantity: 2,
        deliveryDateAndTime: "16-12-2025 10:30:00 AM"
    }, 
    {
        name: "Apple 17 pro max",
        price: 140000,
        quantity: 1,
        deliveryDateAndTime: "25-12-2025 9:00:00 AM"
    }
];

placeAnOrder(SUNDEEEP_CART_ITEMS, "XMAS30", "SUNDEEEP002");



// Assignment -2 


const SURYA_CART_ITEMS = [
    {
        name: "0 to 1",
        price: 1000,
        quantity: 3,
        deliveryDateAndTime: "16-12-2025 10:30:00 AM"
    }, 
    {
        name: "Samsung phone",
        price: 140000,
        quantity: 1,
        deliveryDateAndTime: "25-12-2025 9:00:00 AM"
    }
];



//1  to calculate the total price
function calculateTotalPrice(orderItems) {
    let total = 0;
    for (const i = 0; i < orderItems.length; i++) {
        total += orderItems[i].price * orderItems[i].quantity;
    }
    console.log("Total price: ",total);
}



//2 Discount percentage 
function deduceDiscount(totalPrice, discountCoupon) {
    var discountPercentage = DISCOUNT_MAPPINGS[discountCoupon]; 
    console.log("Discount price: "+totalPrice - (totalPrice * (discountPercentage / 100)));
}


//3 payment processs
function processPayment(payablePrice) {
    if (payablePrice <= SUNDEEEP_WALLET_BALANCE) {
        SUNDEEEP_WALLET_BALANCE -= payablePrice; // reduce  from wallet
        console.log("Payment successfull! ");
    }
    console.log("need more money to purchase");
}

const SURYA_ADDRESSES = [
    {
        id: "SURYA001",
        flatNumber: "105",
        buildingName: "Sri Mallikarjuna PG",
        street: "Bollineni Homes",
        pincode: "500072",
        landmark: "near sai baba temple",
        city: "hyderabad",
        state: "TG"
    }, 
    {
        id: "SURYA002",
        flatNumber: "201",
        buildingName: "ST HQ",
        street: "DMART Street",
        pincode: "500075",
        landmark: "near zudio",
        city: "hyderabad",
        state: "TG"
    }, 

]

//4 assign the address
function assignUserSelectedAddress(addressId) {
    for (const i = 0; i < SURYA_ADDRESSES.length; i++) {
        if (SURYA_ADDRESSES[i].id === addressId) {
            console.log(SURYA_ADDRESSES[i]);
        }
    }
}



//5 assign a delivery partner 
function assignDeliveryPartner(order) {
    for (const i = 0; i < DELIVERY_PARTNERS.length; i++) {
        if (DELIVERY_PARTNERS[i].id === "DEL001") { 
            order.deliveryPartner = DELIVERY_PARTNERS[i].id;
            DELIVERY_PARTNERS[i].drops.push(order); 
        }
    }
}


//6 save the order 
function saveAnOrder(order) {
    order.status = "PLACED"; 
    ORDERS.push(order); 
}

//placeAnOrder(SUNDEEEP_CART_ITEMS, "XMAS30", "SUNDEEEP002");
function PlaceOrder(items,coupons,address){
    let price=calculateTotalPrice();


}



