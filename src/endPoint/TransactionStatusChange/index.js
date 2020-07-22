module.exports = {
    request: {
        mandatory: ["Action", "MerchantReference", "Signature"],
        conditional: [],
        optional: [],
        signature: ["Action", "MerchantReference"],
        url: undefined, // checkStatusUrl
    },
    response: {
        all: ["Action", "ResponseStatus", "ResponseMessage", "TransactionCode", "Status", "Signature"],
        signature: ["Action", "ResponseStatus", "TransactionCode", "Status"]
    }
}