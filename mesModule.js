var direBonjour = function () {
    console.log('Bonjour');
}
// module.exports = direBonjour;
var direBonsoir = function () {
    console.log('Bonsoir');
}
module.exports = { sayHello: direBonjour };
exports.direBonjour = function () {
    console.log('Bonjour');
}




exports.add = function (x, y) {  
    return x + y;  
};  
    
exports.sub = function (x, y) {  
    return x - y;  
};  
    
exports.mult = function (x, y) {  
    return x * y;  
};  
    
exports.div = function (x, y) {  
    return x / y;  
}; 