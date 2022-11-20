// crée 21 alummette et les affiche en html dans une div


let alumette = 21;

//fonction pour attendre 5 secondes




for (let i = alumette ; i > 0 ; i--) {
    const img = document.createElement("img");
    img.src = "img/allumette.png";

    const div = document.getElementById("x");
    div.appendChild(img);
}




// si le joueur clique sur le bouton jouer alors le jeu commence

document.getElementById('play').onclick = function () {



let div;
    while (alumette > 0) {


        //demande au joueur de choisir le nombre allumettes à enlever avec un

        let choix = parseInt(prompt("Joueur 1 Choisissez le nombre d'alummettes à enlever (1,2 ou 3)"));


        //vérifie que le choix est valide

        if (choix => 1 && choix <= 3) {

//enlève le nombre d'alummettes choisi

            alumette = alumette - choix;
//suprimer les allumettes en html en fonction du nombre choisi

            for (let i = choix ; i > 0 ; i--) {
                div = document.getElementById("x");
                div.removeChild(div.lastChild);

            }
        } else {
            alert("Choix invalide");


        }


    //attendre 5 secondes




//si le nombre d'alummettes est inférieur à 0 alors le joueur 2 a gagné

        if (alumette <= 0 ) {
            alert("Joueur 2 a gagné");
            break;

        }

        //demande au joueur 2 de choisir le nombre allumettes

        let choix2 = parseInt(prompt("Joueur 2 Choisissez le nombre d'alummettes à enlever (1,2 ou 3)"));

        //vérifie que le choix est valide

        if (choix2 => 1 && choix2 <= 3) {


        //enlève le nombre d'alummettes choisi

                alumette = alumette - choix2;

//suprimer les allumettes en html en fonction du nombre choisi

            for (let i = choix2 ; i > 0 ; i--) {
                div = document.getElementById("x");
                div.removeChild(div.lastChild);

            }
        } else {
            alert("Choix invalide");


        }




        //si le nombre d'alummettes est inférieur à 0 alors le joueur 1 a gagné

        if (alumette <= 0) {
            alert("Joueur 1 a gagné");
            break;

        }



}


//recharger la page pour rejouer

    location.reload();
}


