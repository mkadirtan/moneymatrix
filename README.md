Example usage:
```node
const mm = require("./index");

const options = require("./config.json");
const Moneymatrix = new mm(options);

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
const requestData = Moneymatrix.createBody("InitWithdraw", body);

Moneymatrix.send().then(response => {
    const isAuthentic = Moneymatrix.checkSignature("InitWithdraw", response);
    if(isAuthentic){ console.log(response) }
}).catch(e => { console.log(e) });
```
