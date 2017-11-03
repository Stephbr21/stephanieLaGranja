var Pato = (
	function () {

		function Pato(pnombre) {
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