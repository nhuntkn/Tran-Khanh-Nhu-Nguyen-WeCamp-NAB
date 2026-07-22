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

}