var Perro = (
	function () {

		function Perro(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, onClick,pcomida) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 100;
			this.tipo = 'Perro';
			this.cantComida = 4;
			this.cantAgua = 4;
			this.onClick = onClick;
			this.capacidadConsumoAgua = 35;
			this.title = null;
			this.addCard();
			this.tipoComida = 'Alimento';
			this.peso = 15
		}
		//Heredar los metodos definidos en Animal (prototype)
		Perro.prototype = Object.create(Animal.prototype);
		Perro.prototype.constructor = Animal;

		//Class Methods
		Perro.prototype.comer = function () {
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

		Perro.prototype.beber = function () {
			
			if (this.capacidadEstomago > 0 && this.capacidadConsumoAgua !=0) {
				this.capacidadConsumoAgua -= this.cantAgua;
				document.getElementById('animalContainer_capWater').innerHTML = "Consumo de agua: " + this.capacidadConsumoAgua;
				this.capacidadConsumoAlimento -= 1;
				document.getElementById('animalContainer_capFood').innerHTML = "Consumo de alimento: " + this.capacidadConsumoAlimento;
			}else{
				console.log("El animal no quiere agua");
				}
		}

		Perro.prototype.producir = function () {
			document.getElementById('animalContainer_capProduction').style.visibility="hidden";

		}

		Perro.prototype.addCard = function () {
			
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
			
		return Perro;
	}
)();