var Animal = (
    function () {
        function Animal(pnombre) {
            this.nombre = pnombre;
            // this.edad = pedad;
            // this.altura = paltura;
            // this.peso = ppeso;
            // this.tamanno = ptamanno;
            // this.capacidadEstomago = pcapacidadEstomago;
            // this.capacidadConsumoAgua = pcapacidadConsumoAgua;
            // this.capacidadConsumoAlimento = pcapacidadConsumoAlimento;
            // this.capacidadProduccion = pcapacidadProduccion;
            // this.tipoProduccion = ptipoProduccion;
        }

        //Class Methods
        Animal.prototype.comer = function () {
            console.log(this.nombre + ' soy una animal y estoy comiendo.');
        }

        Animal.prototype.caminar = function () {
            console.log(this.nombre + ' soy una animal y estoy caminando.');
        }

        Animal.prototype.beber = function () {
            console.log(this.nombre + ' soy una animal y estoy bebiendo.');
        }

        Animal.prototype.producir = function () {
            console.log(this.nombre + ' soy una animal y estoy produciendo.');
        }

        return Animal;
    }
)();