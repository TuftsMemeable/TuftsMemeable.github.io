const validOrderTypes = ["shirt", "pants", "waterbottle"];
const validColors = ["red", "blue", "white"];
const validSizes = ["small", "medium", "large"];

function encodeOrderData(orderData) {
  var queryData = [];
  for (var param in orderData) {
    queryData.push(encodeURIComponent(param) + "=" + encodeURIComponent(orderData[param]));
  }
  return queryData.join("&");
}

function decodeOrderData(orderParamString) {
  let params = new URLSearchParams(orderParamString);
  return {
    "orderType": params.get("orderType"),
    "color": params.get("color"),
    "size": params.get("size"),
    "quantity": params.get("quantity"),
    "memeImage": params.get("memeImage")
  };
}

function validateOrder(orderData) {

  return (
    validOrderTypes.indexOf(orderData["orderType"]) !== -1
    && validColors.indexOf(orderData["color"]) !== -1
    && validSizes.indexOf(orderData["size"]) !== -1
    && orderData["quantity"] > 0 
  );

}

/* creates an order param string that is used to communicate
 * order information between pages */
function createOrder(orderType, color, size, quantity, memeImage) {
  
  var orderData = {
    "orderType": orderType,
    "color": color,
    "size": size,
    "quantity": quantity,
    "memeImage": memeImage
  }

  if (!validateOrder(orderData)) {
    return undefined;
  }

  var orderParamString = encodeOrderData(orderData);

  return orderParamString;
  

}
