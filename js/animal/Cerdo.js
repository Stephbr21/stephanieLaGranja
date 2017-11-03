var Cerdo = (
	function () {

		function Cerdo(pnombre) {
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