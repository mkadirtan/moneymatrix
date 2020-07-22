const _ = require("underscore");
const https = require("https");
const endPoint = require("./src/endPoint");

module.exports = function(options){
    const { credentials, baseUrl } = options;
    this.createBody = function(url, body, type){
        const req = endPoint(url).createBody(credentials, body, type);
        return {
            req,
            send: () => {
                return this.send(url, req);
            }
        };
    };
    this.checkSignature = function(url, responseBody){
        return endPoint(url).checkSignature(credentials, responseBody);
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
            let responseData = "";
            const req = https.request(opts, function(response){
                response.setEncoding("utf-8");
                response.on("data", chunk => {
                    responseData += chunk;
                });
                response.on("close", () => {
                    res(JSON.parse(responseData))
                })
                response.on("error", e => rej(e))
            });

            req.on("error", e => rej(e));
            req.write(postData);
            req.end();
        })
    }
}