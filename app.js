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
    gato.color = 'purple';
    animals.push(gato);

    var perro = new Perro('Booby');
    perro.color = 'green';
    animals.push(perro);
    
    var caballo = new Caballo('Clotilde');
    caballo.color = 'pink';
    animals.push(caballo);

    var gallina = new Gallina('Plumin');
    gallina.color = 'black';
    animals.push(gallina);

    var gallina = new Gallina('Blanca');
    gallina.color = 'brown';
    animals.push(gallina);

    var pato = new Pato('Poppy');
    pato.color = 'cyan';
    animals.push(pato);

    var pato = new Pato('Pipo');
    pato.color = 'yellow';
    animals.push(pato);

    var cerdo = new Cerdo('Jonas');
    cerdo.color = 'red';
    animals.push(cerdo);
    

    console.log(animals);

    var animalContainer_title = document.getElementById('animalContainer_title');
    animalContainer_title.style.color = 'blanchedalmond';
    animalContainer_title.style.textAlign = 'center';
    // var farmContainer_money = document.getElementById('farmContainer_money');
    // var farmContainer_egg = document.getElementById('farmContainer_egg');
    // var farmConainer_milk = document.getElementById('farmConainer_milk');
    // var farmContainer_bacon = document.getElementById('farmContainer_bacon');
    // var farmContainer_corn = document.getElementById('farmContainer_corn');
    // var farmContainer_food = document.getElementById('farmContainer_food');
    // var farmContainer_grass = document.getElementById('farmContainer_grass');
    
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
        title.style.padding = '5px 0px 0px 18px';
        title.style.height = '10px';
        title.style.textAlign = 'center';
        title.style.color = 'blanchedalmond';
        title.innerHTML = animals[i].nombre;
        animal.appendChild(title);

        animal.addEventListener('click', onAnimalCardClick, false);
    }

    function onAnimalCardClick(event) {
        console.log(event);
        var animal = getAnimalByName(event.target.id);
        console.log(animal);
        event.target.style.background = animal.color;
        animalContainer_title.innerHTML = animal.nombre;
    }

    function getAnimalByName(nombre) {
        for (var i = 0; i < animals.length; i++) {
            if (animals[i].nombre === nombre) {
                return animals[i];
            }
        }
        return null;
    }
    
    //ModalBuy
        var modal = document.getElementById('myModalBuy');
        var btn = document.getElementById("myBtn");
        var span = document.getElementsByClassName("close")[0];
        btn.onclick = function() {
            modal.style.display = "block";
        }
        span.onclick = function() {
            modal.style.display = "none";
        }

    //ModalSell
        var modals = document.getElementById('myModalSell');
        var btns = document.getElementById("myBtnSell");
        var spans = document.getElementsByClassName("closes")[0];
        btns.onclick = function() {
            modals.style.display = "block";
        }
        spans.onclick = function() {
            modals.style.display = "none";
        }


}
