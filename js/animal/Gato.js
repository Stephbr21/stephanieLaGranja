var Gato = (
	function () {

		function Gato(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, onClick) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 100;
			this.tipo = 'Gato';
			this.cantComida = 4;
			this.onClick = onClick;
			this.title = null;
			this.addCard();
		}
		//Heredar los metodos definidos en Animal (prototype)
		Gato.prototype = Object.create(Animal.prototype);
		Gato.prototype.constructor = Animal;

		//Class Methods
		Gato.prototype.comer = function () {
			console.log(this.nombre + ' soy un Gato y estoy comiendo.');
		}

		Gato.prototype.brincar = function () {
			console.log(this.nombre + ' soy un Gato y estoy comiendo.');
		}

		Gato.prototype.addCard = function () {
			
			var animal = document.createElement('div');
			var animalsContainer = document.getElementById('animalsContainer')
			animalsContainer.appendChild(animal);
			
			animal.id = this.nombre;
			animal.classList.add('animalCardContainer');
			
			this.title = document.createElement('h5');
			this.title.innerHTML = this.nombre;
			this.title.classList.add('styleTitle');
			animal.appendChild(this.title);
			
			var imageAnimal = document.createElement('div');
			imageAnimal.classList.add(this.tipo);
			imageAnimal.classList.add('imgAnimalStyle');
			animal.appendChild(imageAnimal);
			
			animal.addEventListener('click', this.onClick, false);
			
			var infoHappy = document.createElement('p');
			infoHappy.innerHTML = "F: " + this.felicidad + "%";
			infoHappy.classList.add('styleTitle');
			infoHappy.style.marginTop = '100px';
			infoHappy.style.fontSize = '10px';
			infoHappy.style.marginRight = '7px';
			animal.appendChild(infoHappy);
		}
			
		Gato.prototype.updateCard = function () {
			this.title.innerHTML = 'Lo que sea';
		}
		return Gato;
	}
)();