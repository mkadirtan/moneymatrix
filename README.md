Example usage:
```node
const mm = require("moneymatrix");

const options = {
    "baseUrl": "api-release.moneymatrix.com",
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
    "AllowPaySolChange": true,
    "Amount": "12.00",
    "Currency": "TRY",
};
const InitWithdraw = moneymatrix.createRequest("InitWithdraw", body);

InitWithdraw.send().then(response => {
    const isAuthentic = moneymatrix.checkResponse("InitWithdraw", response);
    if(isAuthentic){ console.log(response) }
}).catch(e => { console.log(e) });
```