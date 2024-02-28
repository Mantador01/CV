// Script.js
document.addEventListener("DOMContentLoaded", function() {
    // Récupérer les données du modèle (ici, le JSON)
    fetch("../modele/data.json")
    .then(response => response.json())
    .then(data => {
        // Afficher les informations personnelles
        document.getElementById("nom").textContent = data.informations_personnelles.nom;
        document.getElementById("email").textContent = data.informations_personnelles.email;
        document.getElementById("telephone").textContent = data.informations_personnelles.telephone;
        document.getElementById("adresse").textContent = data.informations_personnelles.adresse;
    });
});

document.getElementById('dlbutton').addEventListener('click', function() {
    // Créer un lien pour le téléchargement du fichier
    var link = document.createElement('a');
    link.setAttribute('href', './fichier/COTTIER_ALEXANDRE_CV.pdf');
    link.setAttribute('download', 'COTTIER_Alexandre.pdf');

    // Simuler le clic sur le lien
    document.body.appendChild(link);
    link.click();

    // Supprimer le lien après le téléchargement
    document.body.removeChild(link);
});
