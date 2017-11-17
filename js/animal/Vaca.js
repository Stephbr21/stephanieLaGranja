var Vaca = (
	function () {

		function Vaca(pnombre,pedad,paltura,ppeso,ptamanno,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoProduccion) {
			Animal.call(this, pnombre);
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

		return Vaca;
	}
)();