const _ = require("underscore");
const createSignature = require("./createSignature");

module.exports = function(credentials, response, signatureParameters, fields){
    const signature = response.Signature;
    const calcSignature = createSignature(credentials, response, signatureParameters);
    if(signature !== calcSignature){ return false }
    return _.isEqual(Object.keys(response), fields);
}