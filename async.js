var fs = require ('fs');
const fsPath = require('fs-path'); 
/*
 var content = fs.readFile('./salutations.txt',function (err,result){
     if (err)
       return console.error(err);
     return console.log(result.toString());  
 });
 console.log('fin du fichier');
*/
var file = ["file1.txt", "file2.txt", "file3.txt"];
fs.access('monDossier/', (err) => {
    if (err) {
        console.log("The folder does not exist, Creation de monDossier/");
        for (let i = 0; i < file.length; i++) {
            fsPath.writeFile('monDossier/' + file[i], 'content', function (err) {
                if (err)
                    return console.error(err);
            });
        } 
    } else {
        console.log("The folder exists.");
    }
});