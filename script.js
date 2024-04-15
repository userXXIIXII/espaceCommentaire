// Garantir que les éléments du DOM sur lesquels nous voulons agir sont disponibles avant exécution.
// La fonction init sera appelée lorsque l'événement DOMContentLoaded se produira
// Récupération des éléments du fomulaire et de l'erreur
function init() {
    let form = document.querySelector('form');
    let error = document.getElementById('error-message';)

// Ecouter les événements sur la soumission du formulaire

    form.addEventListener('submit', function (event) {
        event.preventDefault();

// Récupération des éléments du formualaire espace commentaire et leurs valeurs

let firstNameInput = document.getElementById('first-name').value.trim();
let lastNameInput = document.getElementById('last-name').value.trim();
let messageInput = document.getElementById('message').value.tim();

if (!firstNameInput || !lastNameInput || !message) {
    error.style.display = 'block' ;
}
    }}
