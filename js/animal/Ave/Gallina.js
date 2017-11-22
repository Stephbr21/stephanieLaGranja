var Gallina = (
	function () {

		function Gallina(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 100;
			this.tipo = 'Gallina';

			this.cantidadDeProducto = 0;
			// this.velocidadDeProducion = 2 * this.FRAMERATE;
			this.tiempoDeProduction = 6 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = 2 * (this.felicidad / 100);
		}
		//Heredar los metodos definidos en Animal (prototype)
		Gallina.prototype = Object.create(Animal.prototype);
		Gallina.prototype.constructor = Animal;

		//Class Methods
		Gallina.prototype.comer = function () {
			console.log(this.nombre + ' soy una Gallina y estoy comiendo.');
		}

		Gallina.prototype.brincar = function () {
			console.log(this.nombre + ' soy una Gallina y estoy brincando.');
		}

		Gallina.prototype.producir = function () {
			console.log('Recoger huevos');
		};

		Gallina.prototype.crearProducto = function () {
			//this.capacidadProduccion
			//this.cantidadDeProducto = 0;
			//this.velocidadDeProducion = 0

			if (this.capacidadProduccion <= this.cantidadDeProducto) {
				if (this.tiempo >= this.tiempoDeProduction) {
					this.cantidadDeProducto += this.cantidadDeProductoPorTiempo;
					this.tiempo = 0;
					console.log(this.nombre + ' tiene ' + this.cantidadDeProducto + ' de producto!');
				}
			} else {
				//Vace llena
			}

		}

		Gallina.prototype.update = function () {
			this.tiempo++;
			this.crearProducto();
		}

		return Gallina;
	}
)();