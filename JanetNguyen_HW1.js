
//function to calculate the cart price if all the items have the same price
function calculateCart(itemPrice, quantity, isMember) {
    //Typed input validation
    if (typeof itemPrice !== 'number' || itemPrice < 0 || isNaN(itemPrice)) {
        throw new Error("itemPrice must be a non-negative number");
    }
    if (typeof quantity !== 'number' || quantity <= 0 || isNaN(quantity)) {
        throw new Error("quantity must be a positive number");
    }
    if (typeof isMember !== 'boolean') {
        throw new Error("isMember must be a boolean value");
    }

    const subTotal = itemPrice * quantity;

    //Discount 20% for members
    const discount = isMember ? subTotal * 0.2 : 0;

    //Tax 8% for all customers
    const TAX = 0.08;
    const afterDiscount = subTotal - discount;
    const tax = afterDiscount * TAX;

    const finalPrice = afterDiscount + tax;
    return 
}

//function to calculate the cart price if all the items have different prices
function calculateCartDiffPrice(items, isMember) {
    //Typed input validation
    if (!Array.isArray(items) || items.length === 0) {
        throw new Error("items must be a non-empty array");
    }
    if (typeof isMember !== 'boolean') {
        throw new Error("isMember must be a boolean value");
    }

    let subTotal = 0;

    items.forEach((item, index) => {
        const {name, price, quantity} = item;

        if (typeof name !== "string" || name.trim() === "") {
            throw new Error(`Item ${index}:name must be a non-empty string`);
        }
        if (typeof price !== "number" || price < 0 || isNaN(price)) {
            throw new Error(`Item ${index}: price must be a non-negative number`);
        }
        if (typeof quantity !== "number" || quantity <= 0 || isNaN(quantity)) {
            throw new Error(`Item ${index}: quantity must be a positive number`);
        }

        subTotal += price * quantity;
    });

    //Discount 20% for members
    const discount = isMember ? subTotal * 0.2 : 0;

    //Tax 8% for all customers
    const TAX = 0.08;
    const afterDiscount = subTotal - discount;
    const tax = afterDiscount * TAX;

    const finalPrice = afterDiscount + tax;
    return {
        subtotal: subTotal.toFixed(2),
        discount: discount.toFixed(2),
        tax: tax.toFixed(2),
        total: finalPrice.toFixed(2)
    }
}

//Test Scenarios

//1. Member with multiple different items
const cart1 = [
    {name: "Apple", price: 1.5, quantity: 4},
    {name: "Banana", price: 1.0, quantity: 2},
    {name: "Orange", price: 2.0, quantity: 3}
];

console.log("Test 1 (member, mixed cart):", calculateCartDiffPrice(cart1, true));

//2. Non-member with multiple units for a single item
const cart2 = [
    {name: "Milk", price: 4.0, quantity: 5}
];

console.log("Test 2 (non-member, single item):", calculateCartDiffPrice(cart2, false));

//3. Invalid item in the array (negative price)
const cart3 = [
    {name: "Hat", price: -10.0, quantity: 1}
];

console.log("Test 3 (invalid item):", calculateCartDiffPrice(cart3, true));

