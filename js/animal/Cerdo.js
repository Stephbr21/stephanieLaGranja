var Cerdo = (
	function () {

		function Cerdo(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, onClick) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 500;
			this.tipo = 'Cerdo';
			this.cantidadDeProducto = 0;
			this.tiempoDeProduction = 5 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = 3 * (this.felicidad / 100);
			this.capacidadConsumoAgua = 70;
			this.cantComida = 16;
			this.cantAgua = 10;
			this.onClick = onClick;
			this.title = null;
			this.infoHappy = null;
			this.animalDiv = null;
			this.imageAnimal = null;
			this.addCard();
			this.result = 0;
		}
		//Heredar los metodos definidos en Animal (prototype)
		Cerdo.prototype = Object.create(Animal.prototype);
		Cerdo.prototype.constructor = Animal;

		//Class Methods
		Cerdo.prototype.comer = function () {

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

		Cerdo.prototype.beber = function () {
			if (this.capacidadEstomago > 0 && this.capacidadConsumoAgua != 0) {
				this.capacidadConsumoAgua -= this.cantAgua;
				this.capacidadEstomago -= 1;
				this.felicidad += 1;
				this.updateCard();
			} else {
				console.log("El animal no quiere agua");
			}
		}

		Cerdo.prototype.producir = function () {}

		Cerdo.prototype.crearProducto = function () {
			if (this.felicidad > 0) {
				if (this.cantidadDeProducto <= this.capacidadProduccion) {
					if (this.tiempo >= this.tiempoDeProduction) {
						this.cantidadDeProducto += this.cantidadDeProductoPorTiempo;
						var result = this.cantidadDeProducto;
						result = Math.round(result * 100) / 100;
						result.toFixed(2);
						this.cantidadDeProducto = result;
						this.tiempo = 0;
						this.felicidad -= 1;
						this.updateCard();
					}
				}
			}
		}

		Cerdo.prototype.update = function () {
			this.tiempo++;
			this.crearProducto();
		}

		Cerdo.prototype.addCard = function () {

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

		Cerdo.prototype.updateCard = function () {
			this.infoHappy.innerHTML = "F: " + this.felicidad + "%";
		}
		return Cerdo;
	}
)();