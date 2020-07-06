module.exports = {
    request: {
        mandatory: ["MerchantId", "CustomerId", "Signature"],
        signature: ["CustomerId"],
        url: "GetPendingWithdrawalsUrl",
    },
    response: {
        all: ["CashierUrl", "Signature", "ResponseMessage", "ResponseDisplayText", "ResponseCode"],
        signature: ["CashierUrl", "ResponseCode"]
    }
}