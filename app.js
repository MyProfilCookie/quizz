const form = document.querySelector('.form-quizz');
let tableauResultats = [];
// correspond au bonnes réponses du quizz
const reponses = ['c', 'a', 'b', 'a', 'c', 'a', 'b', 'c','b', 'b', 'a', 'b', 'a', 'c', 'b', 'b', 'a'];
// correspond aux messages de félicitations
const emojis = ['✔️', '✨', '👀', '😭', '👎'];
// sélection des éléments du DOM
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(document.querySelector('input[name="q1"]:checked').value);
    for (let i = 1; i < 21; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    // console.log(tableauResultats);
    verifFunc(tableauResultats);
    tableauResultats = [];
});

function verifFunc(tabResultats) {
    for (let a = 0; a < 20; a++) {
        if (tabResultats[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }
    // console.log(verifTableau);
    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}

function afficherResultats(tabCheck) {
    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    // console.log(nbDeFautes);
    switch (nbDeFautes) {
        case 0:
            titreResultat.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`;
            aideResultat.innerText = '';
            noteResultat.innerText = '20/20';
            break;
        case 1:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`;
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
            noteResultat.innerText = '19/20';
            break;
        case 2:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`;
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
            noteResultat.innerText = '18/20';
            break;
        case 3:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`;
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
            noteResultat.innerText = '17/20';
            break;
        case 4:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`;
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
            noteResultat.innerText = '16/20';
            break;
        case 5:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`;
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
            noteResultat.innerText = '15/20';
            break;
        case 6:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`;
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
            noteResultat.innerText = '14/20';
            break;
        case 7:
            titreResultat.innerText = `👀 Encore un effort ... 👀`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '13/20';
            break;
        case 8:
            titreResultat.innerText = `👀 Encore un effort ... 👀`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '12/20';
            break;
        case 9:
            titreResultat.innerText = `✨ Encore un effort ... 👀`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '11/20';
            break;
        case 10:
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '10/20';
            break;
        case 11:
            titreResultat.innerText = `😭 Peux mieux faire ! 😭`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '9/20';
            break;
        case 12:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '8/20';
            break;
        case 13:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '7/20';
            break;
        case 14:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '6/20';
            break;
        case 15:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '5/20';
            break;
        case 16:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '4/20';
            break;
        case 17:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '3/20';
            break;
        case 18:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '2/20';
            break;
        case 19:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '1/20';
            break;
        case 20:
            titreResultat.innerText = `😭 Peux mieux faire ! 😭`;
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            noteResultat.innerText = '0/20';
            break;
        default:
            'Wops, cas innatendu.';
    }
}

function couleursFonction (tabValBool) {
    //Pour chaque question, on va ajouter une couleur qui correspond au booléen
    // j = index de la question dans le tableau toutesLesQuestions
    for (let j = 0; j < tabValBool.length; j++) {
        // si la réponse est correcte
        if (tabValBool[j] === true) {
            //ajouter d'un style qui va colorer en vert la bordure de la question
            toutesLesQuestions[j].style.background = 'lightgreen';
        } else {
            // si la réponse est incorrecte
            //ajouter d'un style qui va colorer en rouge la bordure de la question
            toutesLesQuestions[j].style.background = '#ffb8b8';
            // et on va ajouter la classe 'echec' pour ajouter du css spécifique
            toutesLesQuestions[j].classList.add('echec');
            // on va aussi ajouter une animation avec animate.css
            setTimeout(() => {
                // on retire la classe echec au bout de 500ms
                toutesLesQuestions[j].classList.remove('echec');
            }, 500);
        }
    }
}
// on va parcourir toutes les questions
toutesLesQuestions.forEach(item => {
    // on ajoute un écouteur d'évènement 'click' sur chaque question
    item.addEventListener('click', () => {
        // au clic, on retire le background color
        item.style.background = "white";
    })
}   
)