// crée classe tueur avec nom, sante

class tueur {
    constructor(nom, sante) {
        this.nom = nom;
        this.sante = sante;
    }
}

//definir le nom et la santé du tueur

const tueur1 = new tueur("Jason", 100);

// crée classe victime avec nom, chancemourir, chancedegat et chancel2

class victimes {
    constructor(nomnomclicher, nom , chancemourir, chancedegat, chancel2) {
        this.nomclicher = nomnomclicher;
        this.nom = nom;
        this.chancemourir = chancemourir;
        this.chancedegat = chancedegat;
        this.chancel2 = chancel2;
    }


}

//definir le nom, la chance de mourir, la chance de degat et la chance de l2

const victime1 = new victimes("Nerd", "" , "", "", "");
const victime2 = new victimes("Sportif","" , "", "", "");
const victime3 = new victimes("Blonde","" ,"", "", "");
const victime4 = new victimes("gros","" , "", "", "");
const victime5 = new victimes("russe","" , "", "", "");
const victime6 = new victimes("blanc","" , "", "", "");
const victime7 = new victimes("noir","" , "", "", "");
const victime8 = new victimes("chinoi de chine ","" ,"", "", "");


//crée une liste de nom

const nom = [
    "Jean",
    "Paul",
    "Artur",
    "Vincent",
    "Pierre",
    "Jacques",
    "Michel",
    "Robert",
    "David",
    "Richard",
    "Charles",
    "Jean-deux",
    "Joseph",
    "Thierry",
    "Christian",
    "Daniel",
    "Patrick",
    "Bernard",
    "Jacques",
    ];


//crée un aléatoire pour les chances de mourir, de degat et de l2

// crée un tableau de chifre en 0 et 1 pour les chances de mourir, de degat et de l2

const chancemourir = [
    0.1,
    0.6,
    0.9,
    1,
    0.1,
    0.6,
    0.9,
    1,
];

const chancedegat = [
    0.1,
    0.6,
    0.9,
    1,
    0.1,
    0.6,
    0.9,
    1,
];

const chancel2 = [
    0.1,
    0.6,
    0.9,
    1,
    0.1,
    0.6,
    0.9,
    1,
];


//crée un tableau qui donnera au victime un nom, une chance de mourir, une chance de degat et une chance de l2

const victime = [
    victime1,
    victime2,
    victime3,
    victime4,
    victime5,
    victime6,
    victime7,
    victime8,
];




//crée une fonction qui donne au victime un nom, une chance de mourir, une chance de degat et une chance de l2

function randomvictime() {

    for (let i = 0; i < victime.length; i++) {
        victime[i].nom = nom[Math.floor(Math.random() * nom.length)];
        victime[i].chancemourir = chancemourir[Math.floor(Math.random() * chancemourir.length)];
        victime[i].chancedegat = chancedegat[Math.floor(Math.random() * chancedegat.length)];
        victime[i].chancel2 = chancel2[Math.floor(Math.random() * chancel2.length)];
    }
}


//selectioner aléatoirement 5 victime et les mettre dans un tableau

function selectionvictime() {
    let victimechoisi = [];
    for (let i = 0; i < 5; i++) {
        victimechoisi.push(victime[Math.floor(Math.random() * victime.length)]);
    }
    return victimechoisi;
}

//créer le tableau des victimes choisies

const victimechoisi = selectionvictime();

// donner aux victimes choisies un nom, une chance de mourir, une chance de degat et une chance de l2

randomvictime();

//tableau des victime morte

let victimemort = [];





//crée une boucle qui se termine quand il n'y a plus de victime ou quand le tueur est mort

while (victimechoisi.length > 0 && tueur1.sante > 0) {

    // choisir une victime au hasard

    let victimechoisie = victimechoisi[Math.floor(Math.random() * victimechoisi.length)];

    //aléatoire pour savoir si la victime est morte comparée a sa chance de mourir

    let chansmort = Math.random() < victimechoisie.chancemourir;
    //si elle est morte on la retire du tableau des victimes choisi et on la met dans le tableau des victimes mortes

    if (chansmort) {
        victimechoisi.splice(victimechoisi.indexOf(victimechoisie), 1);
        victimemort.push(victimechoisie);
        console.log(victimechoisie.nom + " est mort");
    }

    //aléatoire pour savoir si la victime a un degat comparée a sa chance de degat

    let chansdegat = Math.random() < victimechoisie.chancedegat;
    //si elle a un degat on lui retire 10 de santé

    if (chansdegat) {
        tueur1.sante -= 10;
        console.log(victimechoisie.nom + " a infliger 10 damage au tueur");
    }

    //aléatoire pour savoir si la victime a un l2 comparée a sa chance de l2

    let chansl2 = Math.random() < victimechoisie.chancel2;
    //si elle a un l2 on lui retire 20 de santé


    if (chansl2) {
        tueur1.sante -= 20;
        victimechoisi.splice(victimechoisi.indexOf(victimechoisie), 1);
        victimemort.push(victimechoisie);
        console.log("Le tueur a perdu 20 de santé et a tué " + victimechoisie.nom);
    }


    //si le tueur est mort on sort de la boucle

    if (tueur1.sante <= 0) {
        console.log("Le tueur est mort");
        break;
    }


    //si il n'y a plus de victime on sort de la boucle

    if (victimechoisi.length === 0) {
        console.log("Il n'y a plus de victime");
        break;
    }

    //si le tueur et les victime sont mort on sort de la boucle

    if (tueur1.sante <= 0 && victimechoisi.length === 0) {
        console.log("Le tueur est mort et il n'y a plus de victime");
        break;
    }
}

    //donner toute les victime morte si le tuuer est encore en vie

    if (tueur1.sante > 0) {
        console.log("Les victime morte sont : " + victimemort.map(victime => victime.nom).join(", "));
        console.log("Le tueur a perdu " + (100 - tueur1.sante) + " de santé");

    }

    //donner toute les victime morte si le tuuer est mort et les victime restante

    if (tueur1.sante <= 0) {

        console.log("Les victime morte sont : " + victimemort.map(victime => victime.nom).join(", "));
        console.log("Les victime restante sont : " + victimechoisi.map(victime => victime.nom).join(", "));

    }
