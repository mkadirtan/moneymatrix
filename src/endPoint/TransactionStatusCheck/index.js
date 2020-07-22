module.exports = {
    request: {
        mandatory: ["Action", "MerchantReference", "PaymentVendor", "RequestedAmount", "ConfirmedAmount", "VendorRequestedAmount", "VendorConfirmedAmount", "Amount", "VendorCurrency", "Currency", "TransactionCode", "TransactionReference", "VendorReference", "Status", "ResponseCode", "ResponseMessage", "VendorCode", "VendorMessage", "Token", "AccountNumber", "PaymentAccountFields", "Signature"],
        conditional: [],
        optional: [],
        signature: ["TransactionCode", "PaymentVendor", "RequestedAmount", "Currency", "Status", "ResponseCode"],
        url: undefined, // callbackUrl
    },
    response: {
        all: ["Action", "ResponseStatus", "ResponseMessage", "Signature"],
        signature: ["Action", "ResponseStatus"]
    }
}