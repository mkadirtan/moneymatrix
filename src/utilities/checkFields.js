module.exports = function (sourceObject, desiredFields) {
    const keys = Object.keys(sourceObject);
    let hasDesiredFields = true;
    desiredFields.forEach(field => {
        let found = keys.find(key => key === field);
        if(!found){ hasDesiredFields = false }
    })
    return hasDesiredFields;
}