var Pato = (
	function () {

		function Pato(pnombre,pedad,paltura,ppeso,ptamanno,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoProduccion) {
			Animal.call(this, pnombre);
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
		return Pato;
	}
)();