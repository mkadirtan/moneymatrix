module.exports = {
    request: {
        mandatory: ["MerchantId", "MerchantReference", "CustomerId", "CountryCode", "IpAddress", "PaymentMethod", "Currency", "Signature"],
        conditional: ["FirstName", "LastName", "EmailAddress", "BirthDate", "PhoneNumber", "Address", "City", "State", "PostalCode"],
        optional: ["UserName", "PersonalNumber", "CustomerGroups", "Channel", "RegistrationIpAddress", "RegistrationDate", "AllowPaySolChange", "Amount", "SuccessUrl", "FailUrl", "CallbackUrl", "CancelUrl", "CheckStatusUrl", "Language", "MerchantInputFields"],
        signature: ["MerchantReference","PaymentMethod","CustomerId","Amount","Currency"],
        url: "InitWithdraw",
    },
    response: {
        all: ["CashierUrl", "Signature", "ResponseMessage", "ResponseDisplayText", "ResponseCode"],
        signature: ["CashierUrl", "ResponseCode"]
    }
}