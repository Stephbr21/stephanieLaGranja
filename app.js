window.addEventListener('load', init, false);

function init() {

    var cusu = new Animal('Batido', 1, 2, 10, 'mediana', 10, 5, 5, 'ninguna', 'ninguno');
    //cusu.comer();
    //cusu.caminar();
    //cusu.beber();

    var animals = [];
    var vaca = new Vaca('Matilde');
    vaca.color = 'blue';
    animals.push(vaca);



    console.log(animals);

    var animalContainer_title = document.getElementById('animalContainer_title');
    var animalContainer_title = document.getElementById('farmContainer_tittle');
    var animalContainer_title = document.getElementById('farmContainer_money');

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