let x = 0;
let y = 0;
let taille = 10;

let h2 ;


function setup() {
    // dessiner dans un canevas
    /*
    createCanvas(200, 200);
    background(0,0,0);
    fill(255, 255, 255);
    ellipse(100, 100, 50, 50);
    */

    h2 = createElement("h2", "coucou je suis un élément H2");
    h2.id('soustitre');
    h2.position(100, 100);

}


function draw() {
    h2.position(mouseX +20, mouseY);

}



function action() {
   // alert("coucou");
   // $ est le selecteur d'élèments HTML

   // modifier le CSS avec JQUERY
   $("#para").css("font-size", "30px");
   $("h1").css("color", "green");
   $("#para").css("color", "yellow");

   // faire des animations avec JQUERY
   $("h1").slideDown(3000);


    // choisir des coordonnées aléatoires pour X et Y
    x = random(0, 500);
    y = random(0, 400);

    // choisir une taille aléatoire pour la variable taille 
    taille = random(2, 35);


   $("#para").css("margin-top", y);
   $("#para").css("margin-left", x);
   $("#para").css("font-size", taille);

   h2.remove(); // supprimer l'élément H2

}