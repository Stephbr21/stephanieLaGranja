var Cerdo = (
	function () {

		function Cerdo(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, onClick) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 800;
			this.tipo = 'Cerdo';
			this.cantidadDeProducto = 0;
			this.tiempoDeProduction = 2 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
			this.cantComida = 12;
			this.onClick = onClick;
			this.title = null;
			this.addCard();
		}
		//Heredar los metodos definidos en Animal (prototype)
		Cerdo.prototype = Object.create(Animal.prototype);
		Cerdo.prototype.constructor = Animal;

		//Class Methods
		Cerdo.prototype.comer = function () {
			console.log(this.nombre + ' soy una Cerdo y estoy comiendo.');
		}

		Cerdo.prototype.producir = function () {
			console.log('Recoger producto');
		};

		Cerdo.prototype.crearProducto = function () {
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
			
		Cerdo.prototype.update = function () {
			this.tiempo++;
			this.crearProducto();
		}
			
		Cerdo.prototype.addCard = function () {				
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
						
		Cerdo.prototype.updateCard = function () {
			this.title.innerHTML = 'Lo que sea';
		}
		return Cerdo;
	}
)();