// const reponse = [
// 	"Le Sphynx", 
// 	"Psychiatre", 
// 	"Un Couteau", 
// 	"Gotham City", 
// 	"Mickael keaton", 
// 	"Le Joker", 
// 	"Thomas et Martha", 
// 	"Heath Legder",
// 	"1940",
// 	"Huntress",
// 	"L'Epouvantail",
// 	"Island",
// 	"Stanley Kurbrick",
// 	"Ra's al Ghul",
// 	"Zoë Kravitz"

// ];

const reponse_correcte = [
    "a",
    "b",
    "a",
    "a",
    "c",
    "c",
    "a",
    "b",
    "a",
    "b",
    "a",
    "a",
    "b",
    "b",
    "d"
];
const formulaire= document.querySelector("form");
let reponse_user = [];
let reponse_check = [];
let nombre_erreur;
const tout_input = document.querySelectorAll("input");


for (var i = 0; i < tout_input.length; i++) {
    
    tout_input[i].addEventListener("click",(e)=>{

        e.target.parentNode.style.backgroundColor = "#19587d";
        let input_disable = [...document.querySelectorAll(`input[name=${e.target.name}]`)];
        // for (var i = 0; i < input_disable.length; i++) {
        //     input_disable[i].setAttribute("disabled","");
        // }

       let except = input_disable.filter(elem => elem != e.target)
       for(let i=0; i<except.length; i++)
       {

            except[i].setAttribute("disabled","");

       }

    })

}


formulaire.addEventListener("submit",(e) => {

    e.preventDefault();

    document.querySelector(".notification_quiz").style.display = "flex";
    document.querySelector(".notification_quiz").style.transition = "0.5s";

    for (let i = 1; i < 16; i++) {
        
        reponse_user.push(document.querySelector(`input[name="q${i}"]:checked`).value);
        
    }

    verifier_reponse(reponse_user);
    reponse_user = [];

});

// verification de reponse de l utilisateur
function verifier_reponse(tab_reponse)
{

    for(let i = 0; i<reponse_correcte.length; i++)
    {

        if(reponse_correcte[i] === tab_reponse[i])
        {
            reponse_check.push(true);
        }else{
            reponse_check.push(false);
        }

    }

    affichage_notification(reponse_check);
    console.log(reponse_check);
    reponse_check = [];

}

// Affichage de notification
function affichage_notification(tab_notification)
{

    nombre_erreur = tab_notification.filter(elem => elem !== true).length;
    if(nombre_erreur == 0)
    {

        document.querySelector("#notification_texte").innerHTML = "Bravo, Sans faute";

    }else if(nombre_erreur < 10)
    {

        document.querySelector("#notification_texte").innerHTML = `Vous êtes presque à la hauteur avec ${nombre_erreur} fautes`;

    }else if(nombre_erreur < 15)
    {

        document.querySelector("#notification_texte").innerHTML = `Vous avez besoin beacoup d' efforts avec ${nombre_erreur} fautes`;

    }else{

        document.querySelector("#notification_texte").innerHTML = `T es vraiment null avec ${nombre_erreur} fautes!! HAHAHAHAHAHAHAHA`;

    }

}


// fermer le poppup
function fermer_notif(){

    document.querySelector(".notification_quiz").style.display = "none";
    document.querySelector(".notification_quiz").style.transition = "0.5s";
    let input = document.querySelectorAll("input");

    
    
}
