const _ = require("underscore");
const https = require("https");
const endPoint = require("./src/endPoint");

module.exports = function(options){
    const { credentials, baseUrl } = options;
    this.createRequest = function(url, body){
        const req = endPoint(url).createRequest(credentials, body);
        return {
            req,
            send: () => {
                return this.send(url, req);
            }
        };
    };
    this.checkResponse = function(url, responseBody){
        return endPoint(url).checkResponse(credentials, responseBody);
    }
    this.httpsOptions = function(url, postData){
        return {
            hostname: baseUrl,
            path:  "/api/v1/Hosted/" + url,
            port: 443,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": postData.length
            }
        }
    };
    this.send = function(url, request){
        return new Promise((res, rej) => {
            const postData = JSON.stringify(request);
            const opts = this.httpsOptions(url, postData);
            const req = https.request(opts);
            req.on("error", e => rej(e));
            req.on("response", response => res(response))
            req.write(postData);
            req.end();
        })
    }
}