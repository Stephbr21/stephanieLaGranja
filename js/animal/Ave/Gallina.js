var Gallina = (
	function () {

		function Gallina(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad,onClick) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 100;
			this.tipo = 'Gallina';
			this.cantidadDeProducto = 0;
			this.velocidadDeProducion = 2 * this.FRAMERATE;
			this.tiempoDeProduction = 6 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = 2 * (this.felicidad / 100);
			this.cantComida = 2;
			this.onClick = onClick;
			this.title = null;
			this.addCard();
		}
		//Heredar los metodos definidos en Animal (prototype)
		Gallina.prototype = Object.create(Animal.prototype);
		Gallina.prototype.constructor = Animal;

		//Class Methods
		Gallina.prototype.comer = function () {
			console.log(this.nombre + ' soy una Gallina y estoy comiendo.');
		}

		Gallina.prototype.producir = function () {
			console.log('Recoger huevos');
		};

		Gallina.prototype.crearProducto = function () {

			if (this.felicidad > 0) {
				if (this.cantidadDeProducto <= this.capacidadProduccion) {
					if (this.tiempo >= this.tiempoDeProduction) {
						this.cantidadDeProducto += this.cantidadDeProductoPorTiempo;
						this.tiempo = 0;
						this.felicidad -= 5;
						console.log(this.nombre + ' tiene ' + this.cantidadDeProducto + ' de producto!');
					}
				}
			}
		}

		Gallina.prototype.update = function () {
			this.tiempo++;
			this.crearProducto();
		}

		Gallina.prototype.addCard = function () {
			
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
			
			Gallina.prototype.updateCard = function () {
				this.title.innerHTML = 'Lo que sea';
		}
		return Gallina;
	}
)();