// Obtenir le modal
var modal = document.getElementById("myModal");

// Obtenir l'élément déclencheur pour ouvrir le modal
var btn = document.getElementById("myBtn");

// Obtenir l'élément <span> qui ferme le modal
var span = document.getElementsByClassName("close")[0];

// Événement de clic pour ouvrir le modal
btn.onclick = function() {
  modal.style.display = "block";
};

// Événement de clic pour fermer le modal
span.onclick = function() {
  modal.style.display = "none";
};

// Événement de clic en dehors du modal pour le fermer
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

