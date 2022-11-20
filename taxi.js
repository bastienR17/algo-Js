// creation d'une classe Personage avec prenom et santé en paramètre

class Personage {
    constructor(prenom, sante) {
        this.prenom = prenom;
        this.sante = sante;
    }
}

// définir le prénom et la santé du personage

const personage1 = new Personage("Jean", 10);

//liste de 5 music avec titre et artiste

const music = [
    {
        titre: "Anissa",
        artiste: "Wejdene"
    },
    {
        titre: "Aicha",
        artiste: "Cheb Khaled"
    },
    {
        titre: "Djoum",
        artiste: "Cheb Hasni"
    },
    {
        titre: "merci",
        artiste: "zzccmxtp"
    },
    {
        titre: "délirum café",
        artiste: "zzccmxtp"
    }
];

//crée une boucle qui tourne 30 fois

for (let i = 0; i < 30; i++) {
    //afficher une musique au hasard
    console.log(music[Math.floor(Math.random() * music.length)]);
    //afficher le nombre de tours
    console.log("nombre de feu rouge avent d'arrivée " + ( 30 - i ));
    //réduire la santé de 1 si la musique est anissa
    if (music[Math.floor(Math.random() * music.length)].titre == "Anissa") {
        personage1.sante -= 1;
        console.log("la santé mental de " + personage1.prenom + " est a " + personage1.sante);

    }


    //si la santé est a 0 afficher "vous êtes mort"
    if (personage1.sante === 0) {
        console.log("BOOM explosion, vous êtes mort");

        }

    if (i === 29) {
        console.log("la musique Anissa a été joué " + ( 10 - personage1.sante ) + " fois");
    }

//quand la boucle est finie afficher le nombre de fois que la musique Anissa a été joué

}