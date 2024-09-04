

var etudiant1= {
    nom : "yao",
    prenom : "eric",
    age : 21,
    option : "front-end",
    moyenne : 18.4,
}

var etudiant2= {
    nom : "Koffi",
    prenom : "Jean",
    age : 31,
    option : "back-end",
    moyenne : 16,
}

var etudiant3= {
    nom : "Chris",
    prenom : "Joel",
    age : 26,
    option : "droit",
    moyenne : 12,
}

var etudiant4= {
    nom : "kassi",
    prenom : "Julien",
    age : 25,
    option : "sport football",
    moyenne : 19,
}

// Affiche tous les étudiants
const Etudiants = () => {
    console.log(etudiant1,etudiant2,etudiant3,etudiant4);
}

Etudiants();

// Par etudiant
const Etudiant = (a) => {
    console.log(a);
}

Etudiant(etudiant2);


//Moyenne la plus élevée

const Moyenne = () => {

    let maxMoyenne = etudiant1.moyenne;
    let nom = etudiant1.nom;

    if(etudiant2.moyenne> maxMoyenne) {
        maxMoyenne = etudiant2.moyenne;
        nom = etudiant2.nom;
    }

    if(etudiant3.moyenne > maxMoyenne) {
        maxMoyenne = etudiant3.moyenne;
        nom = etudiant3.nom; 
    }

    if(etudiant4.moyenne > maxMoyenne) {
        maxMoyenne = etudiant4.moyenne;
        nom = etudiant4.nom;
    }
    console.log(`l'étudiant ${nom} a obtenu a la moyenne la plus élevée qui est de ${maxMoyenne}`);
}

Moyenne();

// Deuxieme methode 

const Methode2 = () => {
    let moyn = Math.max(etudiant1.moyenne,etudiant2.moyenne,etudiant3.moyenne,etudiant4.moyenne);

    let meilleur = [etudiant1,etudiant2,etudiant3,etudiant4].find(index => index.moyenne=== moyn);
    
    console.log(`l'étudiant ${meilleur.nom} a obtenu a la moyenne la plus élevée qui est de ${moyn}`);
}

Methode2();
// // instrucrion 3

// var moyenne1 = etudiant1.moyenne;
// var moyenne2 = etudiant2.moyenne;
// var moyenne3 = etudiant3.moyenne;
// var moyenne4 = etudiant4.moyenne;


// function bestStudent(){
    
//     if((moyenne1 > moyenne2) && (moyenne1 > moyenne3) && (moyenne1 > moyenne4)){

//         return moyenne1;

//     } else if ((moyenne2 > moyenne1) && (moyenne2 > moyenne3) && (moyenne2 > moyenne4)) {
        
//         return moyenne2;

//     } else if((moyenne3 > moyenne1) && (moyenne3 > moyenne2) && (moyenne3 > moyenne4)){

//         return moyenne3;
//     }
//     else{
//         return moyenne4;
//     }
// }

// verify = bestStudent();

// switch(verify){
//     case moyenne1:
//         console.log(`l'etudiant ayant la moyenne la plus élevée est : 
//             ${etudiant1.nom} ${etudiant1.prenom}, 
//             ${etudiant1.age} ans ${etudiant1.option} et a obtenu 
//             ${etudiant1.moyenne} `);
//         break;

//     case moyenne2:
//         console.log(`l'etudiant ayant la moyenne la plus élevée est : 
//             ${etudiant2.nom} ${etudiant2.prenom}, 
//             ${etudiant2.age} ans 
//             ${etudiant2.option} et a obtenu 
//             ${etudiant2.moyenne} `);
//         break;

//     case moyenne3 :
//         console.log(`l'etudiant ayant la moyenne la plus élevée est : 
//             ${etudiant3.nom} ${etudiant3.prenom}, 
//             ${etudiant3.age} ans 
//             ${etudiant3.option} et a obtenu 
//             ${etudiant3.moyenne} `);
//             break;
        
//     case moyenne4 :
//         console.log(`l'etudiant ayant la moyenne la plus élevée est : 
//             ${etudiant4.nom} 
//             ${etudiant4.prenom}, 
//             ${etudiant4.age} ans 
//             ${etudiant4.option} et a obtenu 
//             ${etudiant4.moyenne} `);
//             break;

//     default :
//             console.log("Aucune valeur trouvée");
// } 


var EtudiantTab = [
    E1 : {
        nom : "yao",
        prenom : "eric",
        age : 21,
        option : "front-end",
        moyenne : 18.4,
    },

    E2 : {
        nom : "Koffi",
        prenom : "Jean",
        age : 31,
        option : "back-end",
        moyenne : 16,
    },
]

console.log(EtudiantTab);