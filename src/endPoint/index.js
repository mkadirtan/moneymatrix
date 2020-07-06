const util = require("../utilities");

module.exports = function(url){
    const parameters = require("./" + url);
    return {
        createRequest(credentials, body){
            return util.createRequest(credentials, body,  parameters.request.signature, parameters.request.mandatory);
        },
        checkResponse(credentials, response){
            return util.checkResponse(credentials, response, parameters.response.signature, parameters.response.all);
        }
    }
}