var Vaca = (
	function () {

		function Vaca(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 500;
			this.tipo = 'Vaca';

			this.cantidadDeProducto = 0;
			this.tiempoDeProduction = 2 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
		}
		//Heredar los metodos definidos en Animal (prototype)
		Vaca.prototype = Object.create(Animal.prototype);
		Vaca.prototype.constructor = Animal;

		//Class Methods
		Vaca.prototype.comer = function () {
			console.log(this.nombre + ' soy una vaca y estoy comiendo.');
		}

		Vaca.prototype.brincar = function () {
			console.log(this.nombre + ' soy una vaca y estoy comiendo.');
		}

		Vaca.prototype.producir = function () {
			console.log('Ordennar');
		};

		Vaca.prototype.crearProducto = function () {
			this.capacidadProduccion
			this.cantidadDeProducto = 0;
			this.velocidadDeProducion = 0

			if (this.capacidadProduccion <= this.cantidadDeProducto) {
				if (this.tiempo >= this.tiempoDeProduction) {
					this.cantidadDeProducto += this.cantidadDeProductoPorTiempo;
					this.tiempo = 0;
					console.log(this.nombre + ' tiene ' + this.cantidadDeProducto + ' de producto!');
				}
			}		
		}

		Vaca.prototype.update = function () {
			this.tiempo++;
			this.crearProducto();
		}

		return Vaca;
	}
)();