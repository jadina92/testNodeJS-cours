// Utilisation de FileSystem, Bibliothèque existante
// dans le Noyau NodeJs
var fs = require('fs');
// Méthode qui va lire le fichier Salutations.txt
// et qui va l'afficher en console
var content = fs.readFileSync('./salutations.txt');
console.log(content.toString());
console.log('FIN DU FICHIER');

/*
//cree un repartoire mondossier avec sync 
var file = ["file1.txt", "file2.txt", "file3.txt"];
if (fs.existsSync('monDossier')) {
    console.error('dossier existe deja');
}
else {
    for (let i = 0; i < file.length; i++) {
        fsPath.writeFileSync('monDossier /' + file[i], 'contenu fichier');
    }
}
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