const _ = require("underscore");
const { createHmac } = require("crypto");

module.exports = function(credentials, body, signatureParams){
    const { MerchantId, MerchantKey } = credentials;
    // Create hmac instance
    const hmac = createHmac("sha512", MerchantKey);
    // Start with MerchantID,
    let signatureData = MerchantId;
    // Add requested fields
    signatureParams.forEach(param => {
        let data = "";
        if(!(body[param] === undefined || body[param] === null)) {
            data = body[param];
        }
        if(param === "Amount"){
            if(!isNaN(parseInt(data))){
                data = parseInt(data).toFixed(2)
            } else {
                data = "0.00"
            }
        }
        signatureData += `${param}='${data}';`
    })
    //End with MerchantKey
    signatureData += MerchantKey
    console.log(signatureData);
    const bytes = Buffer.from(signatureData, "utf-8");
    // Hash the signature with HMAC-SHA512 Algorithm
    hmac.write(bytes);
    hmac.end();
    // Return base64 encoded hash.
    return hmac.read().toString("base64")
}