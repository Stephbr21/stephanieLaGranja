window.addEventListener('load', init, false);

function init() {

    var animals = [];
    var currentAnimalSelected = null;

    var granja = new Granja(2000, 10, 10, 10, 10, 100, 10);
    var precioDeVaca = new Vaca().precio;
    var precioDeGallina = new Gallina().precio;
    var precioDeCerdo = new Cerdo().precio;
    var precioAlimento = new Alimento().precio;
    // var precioPasto = new Pasto().precio;
    // var precioMaiz = new Maiz().precio;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var respuesta = JSON.parse(xhttp.responseText);

        console.log(respuesta);

        var objetoAnimal = respuesta.animales;

        for(var i = 0; i < objetoAnimal.length; i++){
            switch (objetoAnimal[i].tipo) {
                case "vaca":
                    var nuevoAnimal = new Vaca (objetoAnimal[i].nombre,objetoAnimal[i].edad,objetoAnimal[i].altura,objetoAnimal[i].peso,objetoAnimal[i].tamanno,objetoAnimal[i].capacidadEstomago,objetoAnimal[i].capacidadConsumoAgua,objetoAnimal[i].capacidadProduccion,objetoAnimal[i].tipoDeProduccion,objetoAnimal[i].felicidad);
                    animals.push(nuevoAnimal);
                break;
                case "gallina":
                    var nuevoAnimal = new Gallina (objetoAnimal[i].nombre,objetoAnimal[i].edad,objetoAnimal[i].altura,objetoAnimal[i].peso,objetoAnimal[i].tamanno,objetoAnimal[i].capacidadEstomago,objetoAnimal[i].capacidadConsumoAgua,objetoAnimal[i].capacidadProduccion,objetoAnimal[i].tipoDeProduccion,objetoAnimal[i].felicidad);
                    animals.push(nuevoAnimal);
                break;
                case "pato":
                    var nuevoAnimal = new Pato (objetoAnimal[i].nombre,objetoAnimal[i].edad,objetoAnimal[i].altura,objetoAnimal[i].peso,objetoAnimal[i].tamanno,objetoAnimal[i].capacidadEstomago,objetoAnimal[i].capacidadConsumoAgua,objetoAnimal[i].capacidadProduccion,objetoAnimal[i].tipoDeProduccion,objetoAnimal[i].felicidad);
                    animals.push(nuevoAnimal);
                break;
                case "cerdo":
                    var nuevoAnimal = new Cerdo (objetoAnimal[i].nombre,objetoAnimal[i].edad,objetoAnimal[i].altura,objetoAnimal[i].peso,objetoAnimal[i].tamanno,objetoAnimal[i].capacidadEstomago,objetoAnimal[i].capacidadConsumoAgua,objetoAnimal[i].capacidadProduccion,objetoAnimal[i].tipoDeProduccion,objetoAnimal[i].felicidad);
                    animals.push(nuevoAnimal);
                break;
                case "caballo":
                    var nuevoAnimal = new Caballo (objetoAnimal[i].nombre,objetoAnimal[i].edad,objetoAnimal[i].altura,objetoAnimal[i].peso,objetoAnimal[i].tamanno,objetoAnimal[i].capacidadEstomago,objetoAnimal[i].capacidadConsumoAgua,objetoAnimal[i].capacidadProduccion,objetoAnimal[i].tipoDeProduccion,objetoAnimal[i].felicidad);
                    animals.push(nuevoAnimal);
                    break;
                case "perro":
                    var nuevoAnimal = new Perro (objetoAnimal[i].nombre,objetoAnimal[i].edad,objetoAnimal[i].altura,objetoAnimal[i].peso,objetoAnimal[i].tamanno,objetoAnimal[i].capacidadEstomago,objetoAnimal[i].capacidadConsumoAgua,objetoAnimal[i].capacidadProduccion,objetoAnimal[i].tipoDeProduccion,objetoAnimal[i].felicidad);
                    animals.push(nuevoAnimal);
                break;
                case "gato":
                    var nuevoAnimal = new Gato (objetoAnimal[i].nombre,objetoAnimal[i].edad,objetoAnimal[i].altura,objetoAnimal[i].peso,objetoAnimal[i].tamanno,objetoAnimal[i].capacidadEstomago,objetoAnimal[i].capacidadConsumoAgua,objetoAnimal[i].capacidadProduccion,objetoAnimal[i].tipoDeProduccion,objetoAnimal[i].felicidad);
                    animals.push(nuevoAnimal);
               }
            };
        }
    };
    xhttp.open("GET", "js/animal.json", false);
    xhttp.send();
    console.log(animals);
    console.log(granja);

    var btnComprar = document.getElementById('myBtn');
    var btnVender = document.getElementById('myBtnSell');

    //Seleccion de animal
    for (var i = 0; i < animals.length; i++) {
        crearAnimalUI(animals[i]);
    }

    function update() {
        for (var i = 0; i < animals.length; i++) {
            animals[i].update();
        }
        window.requestAnimationFrame(update);
    }
    update();

    //Cargar informacion de la Granja

    var granjaDinero = document.getElementById('farmContainer_money');
    granjaDinero.innerHTML = "Dinero: " + "$" + granja.dinero;

    var granjaHuevos = document.getElementById('farmContainer_egg');
    granjaHuevos.innerHTML = "Huevos:" + granja.huevos;

    var granjaLeche = document.getElementById('farmContainer_milk');
    granjaLeche.innerHTML = "Leche:" + granja.leche;

    var granjaTocino = document.getElementById('farmContainer_bacon');
    granjaTocino.innerHTML = "Tocino:" + granja.tocino;

    var granjaMaiz = document.getElementById('farmContainer_corn');
    granjaMaiz.innerHTML = "Maiz: " + granja.maiz;

    var granjaAlimento = document.getElementById('farmContainer_food');
    granjaAlimento.innerHTML = "Alimento: " + granja.alimento;

    var granjaPasto = document.getElementById('farmContainer_grass');
    granjaPasto.innerHTML = "Pasto: " + granja.pasto;

    document.getElementById('buyCow').addEventListener('click', btnCVacaAction, false);
    document.getElementById('buyChicken').addEventListener('click', btnChickenAction, false);
    document.getElementById('buyPig').addEventListener('click', btnPigAction, false);
    document.getElementById('buyFood').addEventListener('click', btnBuyFood, false);
    // document.getElementById('buyGrass').addEventListener('click', btnBuyGrass, false);
    // document.getElementById('buyCorn').addEventListener('click', btnBuyCorn, false);

    // document.getElementById('comerBtn').addEventListener('click', comerBtnAction, false);
    // document.getElementById('beberBtn').addEventListener('click', beberBtnAction, false);
    document.getElementById('producirBtn').addEventListener('click', producirBtnAction, false);

    //Cargar informacion Animal
    function onAnimalCardClick(event) {
        console.log(event);

        currentAnimalSelected = getAnimalByName(event.target);
        console.log(currentAnimalSelected);
        if (currentAnimalSelected !== null) {
            var animalNombre = window.document.getElementById('animalContainer_name');
            animalNombre.innerHTML = "Nombre: " + currentAnimalSelected.nombre;

            var animalEdad = window.document.getElementById('animalContainer_age');
            animalEdad.innerHTML = "Edad: " + currentAnimalSelected.edad + " años";

            var animalAltura = document.getElementById('animalContainer_height');
            animalAltura.innerHTML = "Altura: " + currentAnimalSelected.altura + " m";

            var animalPeso = document.getElementById('animalContainer_weight');
            animalPeso.innerHTML = "Peso: " + currentAnimalSelected.peso + " kg";

            var animalCapEstomago = document.getElementById('animalContainer_capStomage');
            animalCapEstomago.innerHTML = "Capacidad de estomago: " + currentAnimalSelected.capacidadEstomago;

            var animalCapAgua = document.getElementById('animalContainer_capWater');
            animalCapAgua.innerHTML = "Consumo de agua: " + currentAnimalSelected.capacidaConsumoAgua;

            var animalCapAlimento = document.getElementById('animalContainer_capFood');
            animalCapAlimento.innerHTML = "Consumo de alimento: " + currentAnimalSelected.capacidadConsumoAlimento;

            var animalCapProduccion = document.getElementById('animalContainer_capProduction');
            animalCapProduccion.innerHTML = "Cantidad de producción: " + currentAnimalSelected.cantidadDeProducto;

            var animalTipoProduccion = document.getElementById('animalContainer_kindProduction');
            animalTipoProduccion.innerHTML = "Tipo de Producción: " + currentAnimalSelected.tipoDeProduccion;

            var animalFelicidad = document.getElementById('animalContainer_hapiness');
            animalFelicidad.innerHTML = "Felicidad: " + currentAnimalSelected.felicidad + "%";

            var btnComer = document.getElementById('comerBtn');
            btnComer.innerHTML = "Comer";
            btnComer.classList.add('btnProduccion');

            var btnBeber = document.getElementById('beberBtn');
            btnBeber.innerHTML = "Beber";
            btnBeber.classList.add('btnProduccion');

            var btnProducir = document.getElementById('producirBtn');
            var accionProducir = determinarProduccion(currentAnimalSelected.tipo)

            btnProducir.innerHTML = accionProducir;

            if (accionProducir) {
                btnProducir.classList.add('btnProduccion');
                btnProducir.classList.remove('btnOcultar');
            } else {
                btnProducir.classList.remove('btnProduccion');
                btnProducir.classList.add('btnOcultar');
            }
        }
    }

    function getAnimalByName(target) {

        var animal = null;

        for (var i = 0; i < animals.length; i++) {
            if (animals[i].nombre === target.id) {
                animal = animals[i];
            }
        }

        if (animal === null && target.parentElement !== null) {
            return getAnimalByName(target.parentElement);
        } else if (animal !== null) {
            return animal;
        } else {
            return null;
        }
    }

    function determinarProduccion(panimal) {
        var procesoProduccion = "";

        if (panimal === 'Vaca') {
            procesoProduccion = "Ordeñar";
        } else {
            if (panimal === 'Gallina' || panimal === 'Pato') {
                procesoProduccion = "Huevos";
            } else {
                if (panimal === 'Cerdo') {
                    procesoProduccion = "Tocino";
                }
            }
        }
        console.log(procesoProduccion);
        return procesoProduccion;
    }

    //---------------------Acciones---------------------

    function btnCVacaAction(e) {
        //1. Validar la comprar = dinero para comprar la vaca
        console.log(animals);

        if (granja.dinero >= precioDeVaca) {
            granja.dinero -= precioDeVaca;
            //2. Crear Vaca y agragarla a lista de animales
            var vaca = new Vaca('Clara', 1, 2, 100, 100, 5, 5, 5, 'leche', 95);
            vaca.color = 'green';
            animals.push(vaca);

            //3. Agregar el elemento que representa la vaca en UI
            crearAnimalUI(vaca);
            document.getElementById('farmContainer_money').innerHTML = "Dinero: " + "$" + granja.dinero;
            modal.style.display = "none";
        }if (granja.dinero < precioDeVaca){
            console.log("No tiene dinero para comprar mas animales o alimentos");
       }
    }

    function btnChickenAction(e) {
        //1. Validar la comprar = dinero para comprar la vaca
        console.log(animals);

        if (granja.dinero >= precioDeGallina) {
            granja.dinero -= precioDeGallina;
            //2. Crear Gallina y agragarla a lista de animales
            var gallina = new Gallina('Lolis', 1, 2, 7, 10, 3, 6, 3, 'huevos', 100);
            gallina.color = 'green';
            animals.push(gallina);

            //3. Agregar el elemento que representa la vaca en UI
            crearAnimalUI(gallina);
            document.getElementById('farmContainer_money').innerHTML = "Dinero: " + "$" + granja.dinero;
            modal.style.display = "none";
        }if (granja.dinero < precioDeGallina){
            console.log("No tiene dinero para comprar mas animales o alimentos");
        }
    }

    function btnPigAction(e) {
        //1. Validar la comprar = dinero para comprar la vaca
        console.log(animals);

        if (granja.dinero >= precioDeCerdo) {
            granja.dinero -= precioDeCerdo;
            //2. Crear Cerdo y agragarla a lista de animales
            var cerdo = new Cerdo('Gordis', 4, 1, 50, 60, 5, 4, 9, 'tocino', 70);
            cerdo.color = 'green';
            animals.push(cerdo);

            //3. Agregar el elemento que representa la cerdo en UI
            crearAnimalUI(cerdo);
            document.getElementById('farmContainer_money').innerHTML = "Dinero: " + "$" + granja.dinero;
            modal.style.display = "none";
        }if (granja.dinero < precioDeCerdo){
            console.log("No tiene dinero para comprar mas animales o alimentos");
        };
    };

    // function btnBuyFood(pprecioAlimento) {
    //     var cantAlimento = granja.alimento;

    //     if (granja.dinero >= pprecioAlimento) {
    //         granja.dinero -= pprecioAlimento;

    //         document.getElementById('farmContainer_food').innerHTML = "Alimento: " + cantAlimento;
    //         document.getElementById('farmContainer_money').innerHTML = "Dinero: " + "$" + granja.dinero;            
    //     };   
    // };

    function crearAnimalUI(panimal) {

        var animal = document.createElement('div');
        animalsContainer.appendChild(animal);
        animal.id = panimal.nombre;
        animal.classList.add('animalCardContainer');

        var title = document.createElement('h5');
        title.innerHTML = panimal.nombre;
        title.classList.add('styleTitle');
        animal.appendChild(title);

        var imageAnimal = document.createElement('div');
        imageAnimal.classList.add(panimal.tipo);
        imageAnimal.classList.add('imgAnimalStyle');
        animal.appendChild(imageAnimal);
        animal.addEventListener('click', onAnimalCardClick, false);
    }

    function producirBtnAction(e) {
        console.log(e);
        currentAnimalSelected.producir();
    }

    // Get the modal
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
        modal.style.backgroundColor ="rgba(0,0,0,0.7)";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        };
    }   

}