var Caballo = (
	function () {

		function Caballo(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad,onClick) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 200;
			this.tipo = 'Caballo';
			this.cantComida = 8;
			this.onClick = onClick;
			this.capacidadConsumoAgua = 30;
			this.title = null;
			this.addCard();
		}
		//Heredar los metodos definidos en Animal (prototype)
		Caballo.prototype = Object.create(Animal.prototype);
		Caballo.prototype.constructor = Animal;

		//Class Methods
		Caballo.prototype.comer = function () {
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
	
		Caballo.prototype.beber = function () {
			
			if (this.capacidadEstomago > 0 && this.capacidadConsumoAgua !=0) {
				this.capacidadConsumoAgua -= this.cantAgua;
				document.getElementById('animalContainer_capWater').innerHTML = "Consumo de agua: " + this.capacidadConsumoAgua;
				this.capacidadConsumoAlimento -= 1;
				document.getElementById('animalContainer_capFood').innerHTML = "Consumo de alimento: " + this.capacidadConsumoAlimento;
			}else{
				console.log("El animal no quiere agua");
				}
		}

		Caballo.prototype.addCard = function () {
						
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
						
		return Caballo;
	}
)();