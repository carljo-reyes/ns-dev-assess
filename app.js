import createItemFulfillment from "./solution.js";
import json from "./order.js";

let order = json.order;
let itemFulfillment = createItemFulfillment(order)

console.log(itemFulfillment);