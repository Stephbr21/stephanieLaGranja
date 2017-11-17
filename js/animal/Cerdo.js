var Cerdo = (
	function () {

		function Cerdo(pnombre,pedad,paltura,ppeso,ptamanno,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoProduccion) {
			Animal.call(this, pnombre);
		}
		//Heredar los metodos definidos en Animal (prototype)
		Cerdo.prototype = Object.create(Animal.prototype);
		Cerdo.prototype.constructor = Animal;

		//Class Methods
		Cerdo.prototype.comer = function () {
			console.log(this.nombre + ' soy una Cerdo y estoy comiendo.');
		}

		Cerdo.prototype.brincar = function () {
			console.log(this.nombre + ' soy una Cerdo y estoy comiendo.');
		}
		return Cerdo;
	}
)();