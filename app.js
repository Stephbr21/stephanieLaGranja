window.addEventListener('load', init, false);

function init() {
    // var cusu = new Animal('Batido', 1, 2, 10, 'mediana', 10, 5, 5, 'ninguna', 'ninguno');
    // //cusu.comer();
    // //cusu.caminar();
    // //cusu.beber();

    var animals = [];
    var vaca = new Vaca('Matilde');
    vaca.color = 'blue';
    animals.push(vaca);

    var gato = new Gato('Minino');
    vaca.color = 'purple';
    animals.push(gato);

    var perro = new Perro('Booby');
    vaca.color = 'green';
    animals.push(perro);
    
    var caballo = new Caballo('Clotilde');
    vaca.color = 'pink';
    animals.push(caballo);

    var gallina = new Gallina('Plumin');
    vaca.color = 'black';
    animals.push(gallina);

    var gallina = new Gallina('Blanca');
    vaca.color = 'blue';
    animals.push(gallina);

    var pato = new Pato('Poppy');
    vaca.color = 'cyan';
    animals.push(pato);

    var pato = new Pato('Pipo');
    vaca.color = 'blue';
    animals.push(pato);

    var cerdo = new Cerdo('Jonas');
    vaca.color = 'red';
    animals.push(cerdo);
    

    console.log(animals);

    var animalContainer_title = document.getElementById('animalContainer_title');
    var farmContainer_money = document.getElementById('farmContainer_money');
    var farmContainer_egg = document.getElementById('farmContainer_egg');
    var farmConainer_milk = document.getElementById('farmConainer_milk');
    var farmContainer_bacon = document.getElementById('farmContainer_bacon');
    var farmContainer_corn = document.getElementById('farmContainer_corn');
    var farmContainer_food = document.getElementById('farmContainer_food');
    var farmContainer_grass = document.getElementById('farmContainer_grass');
    
    /*
    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');
    */

    var animalsContainer = document.getElementById('animalsContainer');

    for (var i = 0; i < animals.length; i++) {

        var animal = document.createElement('div');
        animalsContainer.appendChild(animal);
        animal.id = animals[i].nombre;
        animal.classList.add('animalCardContainer');

        var title = document.createElement('h5');
        title.style.marginTop = '0px';
        title.style.marginBottom = '0px';
        title.style.height = '10px';
        title.innerHTML = animals[i].nombre;;
        animal.appendChild(title);

        animal.addEventListener('click', onAnimalCardClick, false);
    }

    function onAnimalCardClick(event) {
        console.log(event);
        var vaca = getVacaByName(event.target.id);
        console.log(vaca);
        event.target.style.background = vaca.color;
        animalContainer_title.innerHTML = vaca.nombre;

    }

    function getVacaByName(nombre) {
        for (var i = 0; i < animals.length; i++) {
            if (animals[i].nombre === nombre) {
                return animals[i];
            }
        }
        return null;
    }
}