//Ecoute le clic et Enter, déclencher la fonction de sauvegarde des choix
document.getElementById("addCboiceBtn").addEventListener("click", saveChoice);

document
  .getElementById("deleteBtn")
  .addEventListener("click", deleteLastChoice);

document.getElementById("choiceBox").addEventListener("keydown", validByEnter);

document.getElementById("decisionatorBtn").addEventListener("click", tirage);

document.getElementById("disagreeBtn").addEventListener("click", bug);

window.addEventListener("mousemove", backgroundParallax);

var fondecran = document.getElementById("fond");
var logo = document.getElementById("logo");
var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");

//document.getElementById("okBtn").addEventListener("click", backTostart);

// parallax sur le background

function backgroundParallax() {
  var mX = Math.round(event.clientX) / 5;
  var mY = Math.round(event.clientY) / 5;

  document.getElementById("fond").style.backgroundPosition =
    mX + "px" + " " + mY + "px";
}

// Donne la valeur du champs à la div choice
function saveChoice() {
  //console.log("Clic !");
  var choice = document.getElementById("choiceBox").value; // value renvoie la valeur du champs
  //Vérrifie que le champs n'est pas vide
  if (choice != "") {
    // crée l'élement suplémentaire dans la liste
    var addedChoice = document.createElement("li");

    addedChoice.textContent = choice;

    //Replace l'élément dans le DOM
    document.getElementById("choiceList").appendChild(addedChoice);
    //Vide le champ :
    document.getElementById("choiceBox").value = "";
  }
}

// Efface le dernier champs saisi
function deleteLastChoice() {
  // récupère dernier élément de la liste

  document.getElementById("choiceList").lastChild.remove();
}

function validByEnter() {
  var kc = event.keyCode; // récupération du code ASCII (identifiant de la touche préssée)

  if (kc == 13) {
    // La touche est : Entrée
    saveChoice(); // On simule le clique sur le bouton1
  }
}

// fonction de tirage

function tirage() {
  //mesure la taille de la liste
  var listElmts = document.querySelectorAll("#choiceList li");

  //fait le tirage et renvoie le choix
  var nombreTire = Math.floor(Math.random() * listElmts.length);

  //récupere le choix et le place dans la texte box

  var goodChoice = listElmts[nombreTire].textContent;

  // Verrifie que la liste n'est pas vide

  if (goodChoice != "") {
    document.getElementById("messageFinal").innerHTML = goodChoice;

    affichage();
  }
}

//fonction  d'affichage

function affichage() {
  content2.style.display = "contents";
  content1.style.display = "none";
}

function affichageBlanc() {
  // Affichage blanc
  fondecran.style.backgroundImage = "none";
  content2.style.display = "none";
  logo.style.display = "none";
}

function affichage2() {
  // Réaffiche la page "2"
  fondecran.style.backgroundImage = "url(img/background.jpg)";
  content2.style.display = "contents";
  logo.style.display = "contents";
}

// raffraichissement de la page

function raffraich() {
  document.location.href = "index.html";
}

// Enclenche le clignottement et redirige sur la page
function bug() {
  setTimeout(affichageBlanc, 100);
  setTimeout(affichage2, 200);
  setTimeout(affichageBlanc, 300);
  setTimeout(affichage2, 400);
  setTimeout(affichageBlanc, 500);
  setTimeout(affichage2, 600);
  setTimeout(affichageBlanc, 700);
  setTimeout(affichage2, 800);
  setTimeout(affichageBlanc, 900);
  setTimeout(affichage2, 1000);
  setTimeout(affichageBlanc, 1050);
  setTimeout(affichage2, 1100);
  setTimeout(affichageBlanc, 1150);
  setTimeout(affichage2, 1200);
  setTimeout(affichageBlanc, 1250);
  setTimeout(affichage2, 1300);
  setTimeout(affichageBlanc, 1325);
  setTimeout(affichage2, 1350);
  setTimeout(affichageBlanc, 1375);
  setTimeout(affichage2, 1400);
  setTimeout(affichageBlanc, 1425);
  setTimeout(raffraich, 1500);
}
