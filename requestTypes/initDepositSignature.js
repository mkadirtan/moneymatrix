const request = require("./initDeposit");
const createSignature = require("../utilities/createSignature");

const signatureParams = ["MerchantReference","PaymentMethod","CustomerId","Amount","Currency"];
const signature = createSignature(request, signatureParams);
console.log(signature);