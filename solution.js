import { v4 as uuidv4 } from 'uuid';

let createItemFulfillment = (order) => {
    let itemFulfillment = {};

    itemFulfillment["id"] = uuidv4();

    itemFulfillment["order_id"] = order["id"];
    itemFulfillment["shipping_address"] = order["shipping_address"];

    let lineItems = [];
    
    lineItems = order["line_items"].map(
        ({sku, quantity}) => ({sku, quantity}) 
    );

    itemFulfillment["lineItems"] = lineItems;

    return itemFulfillment;
}

export default createItemFulfillment;