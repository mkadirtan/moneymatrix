const mm = require("./index");

const options = {
    "baseUrl": "https://api-release.moneymatrix.com/api/v1/Hosted/",
    "credentials": {
        "MerchantKey": "ABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
        "MerchantId": "6789"
    }
}
const moneymatrix = new mm(options);
const body = {
    "MerchantReference": "0bdad3ae38f84c968384f404f9924233",
    "CustomerId": "121212",
    "CountryCode": "TR",
    "IpAddress": "192.168.1.1",
    "PaymentMethod": null,
    "Amount": "12.00",
    "Currency": "TRY",
};

// Create request body as plain js object
const init = moneymatrix.createRequest("InitWithdraw", body);
init.send().then(response => {
    console.log(response);
    console.log(response.body);
}).catch(e => {
    console.log(e)
});

// Check authenticity of response by comparing Signatures.
//const isAuthentic = moneymatrix.checkResponse("InitWithdraw", response);