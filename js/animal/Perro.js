var Perro = (
	function () {

		function Perro(pnombre) {
			Animal.call(this, pnombre);
		}
		//Heredar los metodos definidos en Animal (prototype)
		Perro.prototype = Object.create(Animal.prototype);
		Perro.prototype.constructor = Animal;

		//Class Methods
		Perro.prototype.comer = function () {
			console.log(this.nombre + ' soy una Perro y estoy comiendo.');
		}

		Perro.prototype.brincar = function () {
			console.log(this.nombre + ' soy una Perro y estoy comiendo.');
		}
		return Perro;
	}
)();