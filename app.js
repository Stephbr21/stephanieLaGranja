window.addEventListener('load', init, false);

function init() {

    var animals = [];

    var vaca = new Vaca('Matilde',12,2,20,'mediana', 10,5,5,5,'leche');
    vaca.color = 'blue';
    animals.push(vaca);
      
    var gato = new Gato('Minino',2,3,14,'pequenno',3,4,6,'ninguna','ninguna');
    gato.color = 'purple';
    animals.push(gato);

    var perro = new Perro('Booby',1,3,4,'pequenno',3,4,6,'ninguna','ninguna');
    perro.color = 'green';
    animals.push(perro);
    
    var caballo = new Caballo('Clotilde',4,15,30,'grande',13,14,16,'ninguna','ninguna');
    caballo.color = 'pink';
    animals.push(caballo);

    var gallina = new Gallina('Plumin',1,1,10,'mediana',2,4,3,6,'huevos');
    gallina.color = 'black';
    animals.push(gallina);

    var gallina = new Gallina('Blanca',1,2,14,'mediana',3,6,1,6,'huevos');
    gallina.color = 'brown';
    animals.push(gallina);

    var pato = new Pato('Poppy',1,2,14,'mediana',3,6,1,'ninguna','ninguna');
    pato.color = 'cyan';
    animals.push(pato);

    var pato = new Pato('Pipo',1,2,14,'mediana',3,6,1,'ninguna','ninguna');
    pato.color = 'yellow';
    animals.push(pato);

    var cerdo = new Cerdo('Jonas',4,3,40,'grande',3,6,1,20,'tocino');
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
