const util = require("../utilities");

module.exports = function(url){
    const parameters = require("./" + url);
    return {
        createBody(credentials, body, type){
            if(type !== "request" || type !== "response"){
                throw new Error("Invalid type, it must be 'request' or 'response'");
            }
            return util.createBody(credentials, body,  parameters[type].signature);
        },
        checkSignature(credentials, response, type){
            if(type !== "request" || type !== "response"){
                throw new Error("Invalid type, it must be 'request' or 'response'");
            }
            return util.checkSignature(credentials, response, parameters[type].signature);
        }
    }
}