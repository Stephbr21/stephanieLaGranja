var Vaca = (
	function () {

		function Vaca(pnombre) {
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