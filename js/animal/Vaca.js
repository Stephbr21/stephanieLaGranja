var Vaca = (
	function () {
		function Vaca(pnombre) {

		}
		//Class Methods
		Vaca.prototype.comer = function () {
			console.log(this.nombre + ' soy una vaca y estoy comiendo.');
		}

		return Vaca;
	}
)();