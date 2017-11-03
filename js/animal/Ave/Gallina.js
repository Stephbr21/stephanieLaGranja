var Gallina = (
	function () {

		function Gallina(pnombre) {
			Animal.call(this, pnombre);
		}
		//Heredar los metodos definidos en Animal (prototype)
		Gallina.prototype = Object.create(Animal.prototype);
		Gallina.prototype.constructor = Animal;

		//Class Methods
		Gallina.prototype.comer = function () {
			console.log(this.nombre + ' soy una Gallina y estoy comiendo.');
		}

		Gallina.prototype.brincar = function () {
			console.log(this.nombre + ' soy una Gallina y estoy comiendo.');
		}
		return Gallina;
	}
)();