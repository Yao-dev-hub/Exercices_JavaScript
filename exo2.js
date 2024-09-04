//Création de la table eleve

var Eleves = [

    {
        id: 1,
        nom: "Yao",
        sexe: " M",
        option: " software logiciel",
        ai: { coef: 3, nc: 8, ne: 15 },
        algo: { coef: 5, nc: 14, ne: 10.5 },
        info: { coef: 4, nc: 19, ne: 12.5 },

    },

    {
        id: 2,
        nom: "Mabiala",
        sexe: " F",
        option: " Data Science",
        ai: { coef: 5, nc: 5.5, ne: 10.5 },
        algo: { coef: 5, nc: 19, ne: 15.25 },
        info: { coef: 4, nc: 15, ne: 13 },

    },

    {
        id: 3,
        nom: "Kassi Samuella",
        sexe: " F",
        option: " droit",
        ai: { coef: 2, nc: 12, ne: 15 },
        algo: { coef: 4, nc: 14, ne: 12 },
        info: { coef: 5, nc: 2, ne: 13 },

    },

    {
        id: 4,
        nom: "Solou Patrick",
        sexe: " M",
        option: " Medecine",
        ai: { coef: 2, nc: 15, ne: 17 },
        algo: { coef: 4, nc: 4, ne: 15 },
        info: { coef: 3, nc: 8, ne: 13 },

    },

    {
        id: 5,
        nom: "Koffi",
        sexe: " F",
        option: " robotique",
        ai: { coef: 2, nc: 12, ne: 15 },
        algo: { coef: 4, nc: 11, ne: 18 },
        info: { coef: 5, nc: 10, ne: 14 },

    }

]

// Affichage des eleves 
console.log(Eleves);

// Affichage des détails de chacun des élèves 

const DetailsEleves = (a) => {

    let tabD = Eleves.find((index) => index.id === a)

    // verifie si le tableau existe et si sa longueur est supérieur à zéro

    if (tabD && tabD.length > 0) {
        console.log(tabD);
    } else {
        console.log("Elements non trouvé");
    }

}

// let id = Number(prompt("saisir id de l'élève"));

//DetailsEleves(id);

// CAlculons la moyenne

const Moyennes = () => {

    //Tableau pour mettre à jour les moyennes
    let tabM = [];

    //Parcours du tanleau avec foreach
    Eleves.forEach((eleve) => {

        //Calcule de moyenne pour chaque matière
        let m1 = Number((eleve.ai.nc + eleve.ai.ne) * eleve.ai.coef);
        let m2 = Number((eleve.algo.nc + eleve.algo.ne) * eleve.algo.coef);
        let m3 = Number((eleve.info.nc + eleve.info.ne) * eleve.info.coef);

        //Somme de tous les coefficients
        let somCoef = eleve.ai.coef + eleve.algo.coef + eleve.info.coef;

        //Calcule de la moyenne générale
        let moyenneG = (m1 + m2 + m3) / somCoef;

        //Ajout de la moyenne dans l'objet eleve
        eleve.moyenne = moyenneG;

        //Ajout dans la tabM de l'élève 
        tabM.push(eleve);

    })


    //Mis à jour de notre tableau Eleves
    if (tabM && tabM.length > 0) {
        Eleves = tabM
        console.log(Eleves)
    } else {
        console.log("Tableau non mis à jour");
    }
}


Moyennes(); 