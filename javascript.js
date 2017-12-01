
document.addEventListener("DOMContentLoaded", traitement);
function traitement() {
	//Ces premières lignes permet d'excécuter les méthodes comprises dans les accolades une fois que la page est chargée
	//Equivalent à mettre <script type="text/javascript" src="javascript.js" defer></script> dans le head
	//Ou à mettre la balise script à la fin du body

    var burger = document.querySelector('.burger');
    burger.onclick = function() {
        this.classList.toggle('selected');
    };

    var h1 = document.getElementsByTagName('h1')[0];
    
    h1 = document.querySelector('h1');
    
    h1.innerText = "Le meilleur burger";
    
    h1.onclick = function() {
        alert('clic sur mon h1');
    }
    
    // var cheeses = document.getElementsByClassName('cheese');
    // var h1 = document.getElementById('id-du-h1');
    
    // var h1 = document.querySelector('h1');
    // var firstCheese = document.querySelectorAll('.burger .cheeses')[0];    

    var h2 = document.querySelectorAll('h2')[1];
    h2.innerHTML = 'Il est <strong>délicieux</strong>, essayez-le!';
    //h2.appendChild(document.createTextNode('Il est <strong>délicieux</strong>, essayez-le!'));

    //Récupérer l'objet "Pain du haut", et modifier sa largeur (en %)
    var topBun = document.getElementById('top');
    topBun.style.width = '90%';

    //Récupérer la deuxième boulette, et lui rajouter la classe css "pickle"
    var mb = document.getElementsByClassName('meatball')[1];
    mb.classList.add('pickle');

    //Récupérer la troisième boulette et augmenter sa largeur à 90px
	var boulette3 = document.querySelectorAll('.meatball')[2];
	boulette3.style.width = "90px";

	//Récupérer la tomate, et modifier sa couleur de fond en orange
	var tomato = document.getElementsByClassName('tomato')[0];
	tomato.style.backgroundColor = 'orange';

	//Pour chaque tranche de fromage, augmenter l'arrondi de la bordure
	var eachCheese = document.getElementsByClassName('cheese');
	for (var i = 0; i < eachCheese.length; i++) {
		eachCheese[i].style.borderRadius = "10px";;
	}

	//Rajouter une nouvelle tranche de fromage entre les deux steaks
   
    //newCheese = document.createElement('div');
    //newCheese.classList.add('cheese');
	var cheese = document.querySelector('.cheese');
    var patty = document.querySelectorAll('.patty')[1];
    var newCheese = cheese.cloneNode(false);
    patty.before(newCheese);	

    //Rajouter un attribut id ayant pour valeur 'bottom' au pain du bas
    document.querySelector('.bun-bottom').id='bottom';

    /*Prendre le lien 'documentation officielle' et:
	faire en sorte qu'il s'ouvre dans un nouvel onglet
	modifier l'adresse du lien pour mettre https://www.google.fr*/
    var lien = document.getElementsByTagName('a')[0];
    lien.href='https://www.google.fr';
    lien.target='blank';

    //DUPLIQUER l'assiette avec une fonction faite pour ça, et mettre la nouvelle assiette tout en bas (en dessous de la 1ere)
    var plate = document.querySelector('.plate');
    var newPlate = plate.cloneNode(true);
    var parent = document.getElementsByClassName('burger')[0];
    parent.appendChild(newPlate);

};

