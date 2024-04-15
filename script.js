// Garantir que les éléments du DOM sur lesquels nous voulons agir sont disponibles avant exécution.
// La fonction init sera appelée lorsque l'événement DOMContentLoaded se produira
// Récupération des éléments du fomulaire et de l'erreur
function init() {
    const form = document.querySelector('form');
    const error = document.getElementById('error-message');

// Ecouter les événements sur la soumission du formulaire

    form.addEventListener('submit', function (event) {
        event.preventDefault();

// Récupération des éléments du formualaire espace commentaire et leurs valeurs

const firstNameInput = document.getElementById('first-name').value.trim();
const lastNameInput = document.getElementById('last-name').value.trim();
const messageInput = document.getElementById('message').value.trim();

// Vérifier que les champs sont remplis

if (!firstNameInput || !lastNameInput || !messageInput) {
    error.style.display = 'block' ;
    return;
}

// Création d'un nouvel élément de commentaire

const commentList = document.getElementById('comment-list');
const newComment = document.createElement('div');

// Création d'un nouvel élément du commentaire HTML

newComment.innerHTML = `
<div class="flex space-x-4 text-sm text-gray-500">
  <div class="flex-1 py-10 border-t border-gray-200">
    <h3 class="font-medium text-gray-900">${firstNameInput} ${lastNameInput}</h3>
    <div class="prose prose-sm mt-4 max-w-none text-gray-500">
      <p>${messageInput}</p>
    </div>
  </div>
</div>
`;

// Ajout du nouvel élément de commentaire à la liste des commentaires

commentList.appendChild(newComment);

// Réinitialisation du formulaire

form.reset();

// Masquer le message d'erreur affiché lorsque les champs ne sont pas remplis correctement

error.style.display = 'none';
    });
}

// Garantir que le script commence à s'exécuter quand le document HTML est entièrement chargé

document.addEventListener('DOMContentLoaded', init);



