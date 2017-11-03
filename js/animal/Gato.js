var Gato = (
	function () {

		function Gato(pnombre) {
			Animal.call(this, pnombre);
		}
		//Heredar los metodos definidos en Animal (prototype)
		Gato.prototype = Object.create(Animal.prototype);
		Gato.prototype.constructor = Animal;

		//Class Methods
		Gato.prototype.comer = function () {
			console.log(this.nombre + ' soy una Gato y estoy comiendo.');
		}

		Gato.prototype.brincar = function () {
			console.log(this.nombre + ' soy una Gato y estoy comiendo.');
		}
		return Gato;
	}
)();