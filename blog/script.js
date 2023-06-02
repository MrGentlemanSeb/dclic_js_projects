// Récupérez les éléments du formulaire
const discussionForm = document.getElementById('discussionForm');
const nameInput = document.getElementById('nameInput');
const photoInput = document.getElementById('photoInput');
const messageInput = document.getElementById('messageInput');
const discussionContainer = document.getElementById('discussionContainer');

// Gérez l'événement de soumission du formulaire
discussionForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche la soumission par défaut du formulaire

    // Créez les éléments HTML pour afficher les informations de discussion
    const discussionItem = document.createElement('div');
    const nameElement = document.createElement('h3');
    const messageElement = document.createElement('p');
    const photoElement = document.createElement('img');

    // Récupérez les valeurs des champs du formulaire
    const name = nameInput.value;
    const message = messageInput.value;
    const photo = photoInput.files[0]; // Récupérez le fichier photo

    // Définissez les valeurs des éléments HTML
    nameElement.textContent = name;
    messageElement.textContent = message;

    // Vérifiez si une photo a été téléchargée
    if (photo) {
        // Créez un objet URL pour la photo et définissez la source de l'élément img
        const photoURL = URL.createObjectURL(photo);
        photoElement.src = photoURL;
    }

    // Ajoutez les éléments à la discussion
    discussionItem.appendChild(nameElement);
    discussionItem.appendChild(photoElement);
    discussionItem.appendChild(messageElement);
    discussionContainer.appendChild(discussionItem);

    // Réinitialisez les valeurs des champs du formulaire
    nameInput.value = '';
    photoInput.value = '';
    messageInput.value = '';
});


