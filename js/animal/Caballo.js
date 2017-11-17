var Caballo = (
	function () {

		function Caballo(pnombre,pedad,paltura,ppeso,ptamanno,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoProduccion) {
			Animal.call(this, pnombre);
		}
		//Heredar los metodos definidos en Animal (prototype)
		Caballo.prototype = Object.create(Animal.prototype);
		Caballo.prototype.constructor = Animal;

		//Class Methods
		Caballo.prototype.comer = function () {
			console.log(this.nombre + ' soy una Caballo y estoy comiendo.');
		}

		Caballo.prototype.brincar = function () {
			console.log(this.nombre + ' soy una Caballo y estoy comiendo.');
		}
		return Caballo;
	}
)();