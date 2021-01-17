

 
var math = require('lodash');
var mod = require('./mesModule');
var os  = require('os');
var http = require ('http');
var url  = require ('url');
var querystring = require ('querystring');
var calculator = require('./mesModule'); 

const { title } = require('process');
// PROTOCOL HTTP CREE UN REQUET HTTP LA SERVEUR RENVOI UN REPONSE HELLO WORLD 
 var server = http.createServer(function(req,res){
    res.writeHead(200, {'content-type' : "text/html"});
   // res.writeHead(200);
    //res.end('hello world');
    res.write('<!DOCTYPE html>'+
    '<html>'+
    '   <head>'+
    '       <meta charset="UTF-8" />'+
    '       <title>Ma page Node JS</title>'+
    '   </head>'+
    '   <body>'+
    '       <p>Hello world</p>'+
    '   </body>'+
    '</html>'
    );

});
/*
// http://localhost:8080/mapage
// http://localhost:8080
var server = http.createServer(function (req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.write('Hello world, this is your requested page : ' + page);
    res.end();
});

// un programme qui affiche le nom et prenom 
// http://localhost:8080?prenom=john&nom=wick
var server = http.createServer(function (req, res) {
    var params = querystring.parse(url.parse(req.url).
        query);
    res.writeHead(200, { "Content-Type": "text/plain" });
    if ('prenom' in params && 'nom' in params) {
        res.write('Vous etes ' + params['prenom'] + ' ' +
            params['nom']);
    }
    else {
        res.write('Vous devez bien avoir un prenom et un nom, non ?');
    }
    res.end();
});
*/



//Ecrire un programme qui affiche le resultat d'une operation
//arithmetique des nombres passes en parametre
http://localhost:8080?a=5&b=8
 function calcul(tab, operator) {
    var result = '';
     for (var i in tab) {
         result = result + operator + tab[i];
     }
     return eval(result.substr(1));
 }
     var server = http.createServer(function (req, res) {
     var pathname = url.parse(req.url).pathname;
     var params = querystring.parse(url.parse(req.url).query);
     res.writeHead(200, { 'Content-type': 'text/plain' });
     var result;
     if (pathname === '/addition') {
         result = calcul(params, '+');
     } else if (pathname === '/soustraction') {
         result = calcul(params, '-');
     } else if (pathname === '/multiplication') {
         result = calcul(params, '*');
     } else if (pathname === '/division') {
         result = calcul(params, '/');
     }
     res.write('Resultat : ' + result);
     res.end();
 });
    var add = (a, b) => a + b;
    var sous = (a, b) => a - b;
    var div = (a, b) => a / b;
    var mul = (a, b) => a * b;
    var server = http.createServer(function (req, res) {
     var pathname = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
     res.writeHead(200, { 'Content-type': 'text/plain' });
     var result;
     if ('a' in params && 'b' in params) {
         if (pathname === '/addition') {
             var a = parseInt(params['a']);
             var b = parseInt(params['b']);
             result = add(a, b);
         } else if (pathname === '/soustraction') {
             result = sous(params['a'], params['b']);
         } else if (pathname === '/multiplication') {
             result = mul(params['a'], params['b']);
         } else if (pathname === '/division') {
             result = div(params['a'], params['b']);
         }
     }
     res.write('Resultat : ' + result);
     res.end();
 
    });










server.listen(8080);
//function{a} call back function 
// telecharger un librairie par require (lodash)
console.log(math.map([1,5,3],function(a){
    return a*2
} ));
//appellez la module (mesmodule) qui on a cree 
//mod();



mod.sayHello();


// Utiliser le module os pour afficher :
// L'architecture de votre machine
// Le nombre de CPU
// Le hostname
// Et la charge moyenne



console.log("architecture", os.arch());
console.log("no de cpu ", os.cpus().length);
console.log("hostname", os.hostname());
console.log("la charge moyen ", os.loadavg());
