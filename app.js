window.addEventListener('load', init, false);

function init() {

    var matilde = new Vaca('Matilde');
    matilde.comer();

    var juana = new Vaca('Juana');
    juana.comer();
    //juana.comerPapa();

    console.log(matilde);
}