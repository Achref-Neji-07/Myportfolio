// Charger la pagination dans chaque page
const loadPagination = () => {
    fetch('pagination.html') // Charger le fichier pagination.html
        .then(response => response.text())
        .then(data => {
            // Insérer le contenu dans le conteneur
            document.getElementById('pagination-container').innerHTML = data;

            // Mettre à jour le lien actif en fonction de l'URL actuelle
            const links = document.querySelectorAll('.pagination a');
            links.forEach(link => {
                if (link.href === window.location.href) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        })
        .catch(error => console.error('Erreur lors du chargement de la pagination:', error));
};

// Appeler la fonction pour charger la pagination
loadPagination();
