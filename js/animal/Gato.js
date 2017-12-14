var Gato = (
	function () {

		function Gato(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, onClick) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 500;
			this.tipo = 'Gato';
			this.capacidadConsumoAgua = 40;
			this.cantComida = 6;
			this.cantAgua = 3;
			this.onClick = onClick;
			this.title = null;
			this.infoHappy = null;
			this.animalDiv = null;
			this.imageAnimal = null;
			this.addCard();
			this.result = 0;
		}
		//Heredar los metodos definidos en Animal (prototype)
		Gato.prototype = Object.create(Animal.prototype);
		Gato.prototype.constructor = Animal;

		//Class Methods
		Gato.prototype.comer = function () {

			if (this.capacidadEstomago <= 0) {
				console.log("El animal esta muy lleno");
			}
			if (this.capacidadEstomago > 0) {
				this.capacidadEstomago -= this.cantComida;
				this.capacidadConsumoAlimento -= 1;
				this.felicidad += 1;
			}

			if (this.capacidadConsumoAlimento == 8) {
				this.peso += 8;
			}

			this.updateCard();
		}

		Gato.prototype.beber = function () {

			if (this.capacidadEstomago > 0 && this.capacidadConsumoAgua != 0) {
				this.capacidadConsumoAgua -= this.cantAgua;
				this.capacidadEstomago -= 1;
				this.felicidad += 1;
				this.updateCard();
			} else {
				console.log("El animal no quiere agua");
			}
		}

		Gato.prototype.producir = function () {}

		Gato.prototype.crearProducto = function () {
			if (this.felicidad > 0) {
				if (this.cantidadDeProducto <= this.capacidadProduccion) {
					if (this.tiempo >= this.tiempoDeProduction) {
						this.tiempo = 0;
						this.felicidad -= 1;
						this.updateCard();
					}
				}
			}
		}

		Gato.prototype.update = function () {
			this.tiempo++;
			this.crearProducto();
		}

		Gato.prototype.addCard = function () {

			this.animalDiv = document.createElement('div');
			var animalsContainer = document.getElementById('animalsContainer');
			animalsContainer.appendChild(this.animalDiv);

			this.animalDiv.id = this.nombre;
			this.animalDiv.classList.add('animalCardContainer');

			this.title = document.createElement('h5');
			this.title.innerHTML = this.nombre;
			this.title.classList.add('styleTitle');
			this.animalDiv.appendChild(this.title);

			this.imageAnimal = document.createElement('div');
			this.imageAnimal.classList.add(this.tipo);
			this.imageAnimal.classList.add('imgAnimalStyle');
			this.animalDiv.appendChild(this.imageAnimal);
			this.animalDiv.addEventListener('click', this.onClick, false);

			this.infoHappy = document.createElement('p');
			this.infoHappy.innerHTML = "F: " + this.felicidad + "%";
			this.infoHappy.classList.add('infoHappy');
			this.animalDiv.appendChild(this.infoHappy);
		}

		Gato.prototype.updateCard = function () {
			this.infoHappy.innerHTML = "F: " + this.felicidad + "%";
		}
		return Gato;
	}
)();