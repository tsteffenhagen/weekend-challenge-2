function numberProcessor (object) {
    if (object.operator == '+') {
        return Number(object.numOne) + Number(object.numTwo);       
    } else if (object.operator == '-') {
        return Number(object.numOne) - Number(object.numTwo);
    }else if (object.operator == '/') {
        return Number(object.numOne) / Number(object.numTwo);
    }else if (object.operator == '*') {
        return Number(object.numOne) * Number(object.numTwo);
    }
}
module.exports = numberProcessor;