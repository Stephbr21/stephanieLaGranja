var Cerdo = (
	function () {

		function Cerdo(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, onClick) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 800;
			this.tipo = 'Cerdo';
			this.cantidadDeProducto = 0;
			this.tiempoDeProduction = 2 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
			this.capacidadConsumoAgua = 85;
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
			
			if (this.capacidadEstomago <= 0) {
				console.log("El animal esta muy lleno");
			}
			if (this.capacidadEstomago > 0) {
				this.capacidadEstomago -= this.cantComida;
				document.getElementById('animalContainer_capStomage').innerHTML = "Cap. de estomago: " + this.capacidadEstomago;
				this.capacidadConsumoAlimento -= 1;
				document.getElementById('animalContainer_capFood').innerHTML = "Consumo de alimento: " + this.capacidadConsumoAlimento;
				this.felicidad += 1;
				document.getElementById('animalContainer_hapiness').innerHTML = "Felicidad: " + this.felicidad + "%";
			} if (this.capacidadConsumoAlimento == 8) {
					this.peso += 8;
					document.getElementById('animalContainer_weight').innerHTML = "Peso: " + this.peso + " kg";
				}
		}
			
		Cerdo.prototype.beber = function () {
			
			if (this.capacidadEstomago > 0 && this.capacidadConsumoAgua != 0) {
				this.capacidadConsumoAgua -= this.cantAgua;
				document.getElementById('animalContainer_capWater').innerHTML = "Consumo de agua: " + this.capacidadConsumoAgua;
				this.capacidadConsumoAlimento -= 1;
				document.getElementById('animalContainer_capFood').innerHTML = "Consumo de alimento: " + this.capacidadConsumoAlimento;
				this.felicidad += 1;
				document.getElementById('animalContainer_hapiness').innerHTML = "Felicidad: " + this.felicidad + "%";				
			} else {
				console.log("El animal no quiere agua");
			}
		}
			
		Cerdo.prototype.acariciar = function () {
			console.log(this.nombre + ' Acariciame.');
		}
			
		Cerdo.prototype.producir = function () {
			console.log('Ordennar');
		}
			
		Cerdo.prototype.crearProducto = function () {
			if (this.felicidad > 0) {
				if (this.cantidadDeProducto <= this.capacidadProduccion) {
					if (this.tiempo >= this.tiempoDeProduction) {
						this.cantidadDeProducto += this.cantidadDeProductoPorTiempo;
						var result = this.cantidadDeProducto
						result = Math.round(result * 100) / 100;
						result.toFixed(2);
						// this.result = Math.round(((this.cantidadDeProducto += this.cantidadDeProductoPorTiempo)*100)/100).toFixed(2);
						this.tiempo = 0;
						this.felicidad -= 1;
						document.getElementById('animalContainer_capProduction').innerHTML = "Cant. de producto: " + result;
					}
				}
			}
			return result;
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
			infoHappy.style.fontSize = '15px';
			infoHappy.style.marginRight = '7px';
			animal.appendChild(infoHappy);
		}
						
		Cerdo.prototype.updateCard = function () {
			this.title.innerHTML = 'Lo que sea';
		}
		return Cerdo;
	}
)();