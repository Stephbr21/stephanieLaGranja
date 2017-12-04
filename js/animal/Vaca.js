var Vaca = (
	function () {

		function Vaca(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, onClick) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 500;
			this.tipo = 'Vaca';
			this.cantidadDeProducto = 0;
			this.tiempoDeProduction = 4 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
			this.cantComida = 6;
			this.onClick = onClick;
			this.title = null;
			this.addCard();
			this.capacidadEstomago = 80;
			this.capacidadConsumoAlimento = 0;
			this.capacidadConsumoAgua = 15;
			this.peso = 500
		}
		//Heredar los metodos definidos en Animal (prototype)
		Vaca.prototype = Object.create(Animal.prototype);
		Vaca.prototype.constructor = Animal;

		//Class Methods
		Vaca.prototype.comer = function () {
			
			if (this.capacidadEstomago <= 0 ) {
				console.log("El animal esta muy lleno");	
			}if (this.capacidadEstomago > 0) {
				this.capacidadEstomago -= this.cantComida;
				document.getElementById('animalContainer_capStomage').innerHTML = "Cap. de estomago: " + this.capacidadEstomago;
				this.capacidadConsumoAlimento += 1;
				document.getElementById('animalContainer_capFood').innerHTML = "Consumo de alimento: " + this.capacidadConsumoAlimento;
			}
	
			if (this.capacidadConsumoAlimento == 8) {
				this.peso += 8;
				document.getElementById('animalContainer_weight').innerHTML = "Peso: " + this.peso + " kg";				
				}
		}

		Vaca.prototype.beber = function () {
			this.tiempo++;

			if (this.capacidadConsumoAgua <= 0 ) {
				console.log("El animal ya no quiere agua");	
			}if (this.capacidadConsumoAgua > 0) {
				this.capacidadConsumoAgua -= 1;
				document.getElementById('animalContainer_capWater').innerHTML = "Consumo de agua: " + this.capacidadConsumoAgua;
			}
	
			if (this.capacidadConsumoAgua == 0) {
				document.getElementById('animalContainer_capWater').innerHTML = "Consumo de agua: No quiere agua.";				
				}if(this.tiempo == 5){
					this.capacidadConsumoAgua += 15;
				}
			}

		Vaca.prototype.acariciar = function () {
			console.log(this.nombre + ' Acariciame.');

		}

		Vaca.prototype.producir = function () {
			console.log('Ordennar');
		};

		Vaca.prototype.crearProducto = function () {

			if (this.felicidad > 0) {
				if (this.cantidadDeProducto <= this.capacidadProduccion) {
					if (this.tiempo >= this.tiempoDeProduction) {
						// this.result = this.cantidadDeProducto += this.cantidadDeProductoPorTiempo;
						this.result = parseFloat(Math.round(this.cantidadDeProducto += this.cantidadDeProductoPorTiempo) );
						this.tiempo = 0;
						this.felicidad -= 5;
						document.getElementById('animalContainer_capProduction').innerHTML = "Cant. de producto: " + this.result;
					}
				}if (this.cantidadDeProducto > this.capacidadProduccion) {
						console.log("Recoger producto");
					}
				}
			}

		Vaca.prototype.update = function () {
			this.tiempo++;
			this.crearProducto();
		}

		Vaca.prototype.addCard = function () {

			var animal = document.createElement('div');
			var animalsContainer = document.getElementById('animalsContainer');
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
			
			// var infoHappy = document.createElement('div');
			// infoHappy.innerHTML = "F: " + this.felicidad + "%";
			// infoHappy.classList.add('animalCardContainer');
			// infoHappy.style.marginTop = '100px';
			// infoHappy.style.fontSize = '10px';
			// infoHappy.style.marginRight = '7px';
			// infoHappy.style.display = 'block';
			// animal.appendChild(infoHappy);
		}

		Vaca.prototype.updateCard = function () {
			this.title.innerHTML = 'Lo que sea';
		}

		return Vaca;
	}
)();