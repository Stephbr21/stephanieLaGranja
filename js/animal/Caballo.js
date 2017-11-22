var Caballo = (
	function () {

		function Caballo(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 200;
			this.tipo = 'Caballo';

			this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
		}
		//Heredar los metodos definidos en Animal (prototype)
		Caballo.prototype = Object.create(Animal.prototype);
		Caballo.prototype.constructor = Animal;

		//Class Methods
		Caballo.prototype.comer = function () {
			console.log(this.nombre + ' soy un Caballo y estoy comiendo.');
		}

		Caballo.prototype.brincar = function () {
			console.log(this.nombre + ' soy un Caballo y estoy comiendo.');
		}

		return Caballo;
	}
)();