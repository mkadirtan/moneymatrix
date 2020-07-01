const {MerchantID, MerchantKey} = require("../config.json");

module.exports = {
    // Mandatory Fields
    MerchantID,
    MerchantReference : "0001",
    CustomerId : "0002",
    CountryCode: "TR",
    IpAddress: "127.0.0.1",
    PaymentMethod: "CreditCard",
    Currency: "TRY",
    Signature: "",
    // Conditional Fields
    FirstName : "John",
    LastName : "Doe",
    EmailAddress : "john@doe.com",
    BirthDate : "01/01/1990",
    PhoneNumber: "+90 555 55 55",
    Address: " A street, B building, Apartment 7",
    City: "Istanbul",
    State: "Turkey",
    PostalCode: "34265",
    // Optional Fields
    UserName : "JohnDoe", // max 50
    PersonalNumber : "11111111111", // max 50, TC. Kimlik ?
    CustomerGroups: "Admins",
    Channel: "Mobile", // Mobile, Desktop, Moto
    RegistrationIpAddress: "127.0.0.1",
    RegistrationDate: "01/01/2020",
    AllowPaySolChange: true,
    Amount: "10.0", // Decimal
    SuccessUrl: "",
    FailUrl: "",
    CallbackUrl: "",
    CancelUrl: "",
    CheckStatusUrl: "",
    Language: "en", // en, tr
    MerchantInputFields: []
    /*
    CardToken,
    CardholderName,
    ExpirationMonth,
    ExpirationYear,
     */
}