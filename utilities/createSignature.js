const _ = require("underscore");
const {MerchantID, MerchantKey} = require("../config.json");
const { createHmac } = require("crypto");
const hmac = createHmac("sha512", MerchantKey);

module.exports = function(request, signatureParams){
    // Start with MerchantID,
    let signatureData = MerchantID;
    // Add requested fields
    signatureParams.forEach(param => {
        signatureData += `${param}='${request[param]}';`
    })
    //End with MerchantKey
    signatureData += MerchantKey
    // Convert string to utf8 byte array.
    const bytes = Buffer.from(signatureData, "utf-8");
    // Hash the signature with HMAC-SHA512 Algorithm
    hmac.write(bytes);
    hmac.end();
    // Return base64 encoded hash.
    return hmac.read().toString("base64")
}