var Pato = (
	function () {

		function Pato(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 120;
			this.tipo = 'Pato';

			this.cantidadDeProducto = 0;
			this.tiempoDeProduction = 6 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = 2 * (this.felicidad / 100);
		}
		//Heredar los metodos definidos en Animal (prototype)
		Pato.prototype = Object.create(Animal.prototype);
		Pato.prototype.constructor = Animal;

		//Class Methods
		Pato.prototype.comer = function () {
			console.log(this.nombre + ' soy una Pato y estoy comiendo.');
		}

		Pato.prototype.brincar = function () {
			console.log(this.nombre + ' soy una Pato y estoy comiendo.');
		}

		Pato.prototype.producir = function () {
			console.log('Ordennar');
		};

		Pato.prototype.crearProducto = function () {
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

		Pato.prototype.update = function () {
			this.tiempo++;
			this.crearProducto();
		}

		return Pato;
	}
)();