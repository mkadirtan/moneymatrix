const checkFields = require("./checkFields");
const createSignature = require("./createSignature");

module.exports = function (credentials, body, signatureParameters, fields) {
    body.MerchantId = credentials.MerchantId;
    body.Signature = createSignature(credentials, body, signatureParameters);
    if (!checkFields(body, fields)) {
        return false;
    }
    return body;
}