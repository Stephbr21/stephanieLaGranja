var Caballo = (
	function () {

		function Caballo(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, onClick,pcomida) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 100;
			this.tipo = 'Caballo';
			this.cantComida = 14;
			this.cantAgua = 5;
			this.onClick = onClick;
			this.capacidadConsumoAgua = 30;
			this.title = null;
			this.infoHappy = null;
			this.imageAnimal = null;
			this.animalDiv = null;
			this.addCard();
			this.tipoComida = 'Alimento';
			this.peso = 15
		}
		//Heredar los metodos definidos en Animal (prototype)
		Caballo.prototype = Object.create(Animal.prototype);
		Caballo.prototype.constructor = Animal;

		//Class Methods
		Caballo.prototype.comer = function () {
			
			if (this.capacidadEstomago <= 0) {
				console.log("El animal esta muy lleno");
				}if (this.capacidadEstomago > 0) {
					this.capacidadEstomago -= this.cantComida;
					this.capacidadConsumoAlimento -= 1;
					this.felicidad += 1;
				}if (this.capacidadConsumoAlimento == 8) {
						this.peso += 8;
			}
		}
			
		Caballo.prototype.beber = function () {
			
			if (this.capacidadEstomago > 0 && this.capacidadConsumoAgua != 0) {
				this.capacidadConsumoAgua -= this.cantAgua;
				// document.getElementById('animalContainer_capWater').innerHTML = "Consumo de agua: " + this.capacidadConsumoAgua;
				this.capacidadConsumoAlimento -= 1;
				// document.getElementById('animalContainer_capFood').innerHTML = "Consumo de alimento: " + this.capacidadConsumoAlimento;
				this.felicidad += 1;
				// document.getElementById('animalContainer_hapiness').innerHTML = "Felicidad: " + this.felicidad + "%";				
			} else {
				console.log("El animal no quiere agua");
				}
		}

		Caballo.prototype.crearProducto = function () {
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

		Caballo.prototype.update = function () {
			this.tiempo++;
			this.crearProducto();
		}
			

		Caballo.prototype.addCard = function () {
			
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

		Caballo.prototype.updateCard = function () {
			this.infoHappy.innerHTML = "F: " + this.felicidad + "%";
		}
		
		return Caballo;
	}
)();