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
			this.capacidadConsumoAgua = 9;
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
			if (this.capacidadEstomago <= 0 ) {
				console.log("El animal esta muy lleno");	
			}if (this.capacidadEstomago > 0) {
				this.capacidadEstomago -= this.cantComida;
				document.getElementById('animalContainer_capStomage').innerHTML = "Cap. de estomago: " + this.capacidadEstomago;
				this.capacidadConsumoAlimento -= 1;
				document.getElementById('animalContainer_capFood').innerHTML = "Consumo de alimento: " + this.capacidadConsumoAlimento;
			}
	
			if (this.capacidadConsumoAlimento == 8) {
				this.peso += 8;
				document.getElementById('animalContainer_weight').innerHTML = "Peso: " + this.peso + " kg";				
				}
		}

		Gallina.prototype.beber = function () {
			
			if (this.capacidadEstomago > 0 && this.capacidadConsumoAgua !=0) {
				this.capacidadConsumoAgua -= this.cantAgua;
				document.getElementById('animalContainer_capWater').innerHTML = "Consumo de agua: " + this.capacidadConsumoAgua;
				this.capacidadConsumoAlimento -= 1;
				document.getElementById('animalContainer_capFood').innerHTML = "Consumo de alimento: " + this.capacidadConsumoAlimento;
			}else{
				console.log("El animal no quiere agua");
				}
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
			infoHappy.style.fontSize = '15px';
			infoHappy.style.marginRight = '7px';
			animal.appendChild(infoHappy);
		}
			
			Gallina.prototype.updateCard = function () {
				this.title.innerHTML = 'Lo que sea';
		}
		return Gallina;
	}
)();