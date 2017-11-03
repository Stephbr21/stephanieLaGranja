window.addEventListener('load', init, false);

function init() {

    // var matilde = new Vaca('Matilde');
    // matilde.comer();

    // var juana = new Vaca('Juana');
    // juana.comer();
    // //juana.comerPapa();

    // console.log(matilde);

    var animalsContainer = document.getElementById('animalsContainer');
    //console.log(animalsContainer);

    for (var index = 0; index < 5; index++) {
        var animal = document.createElement('div');
        //console.log(animal);
        animalsContainer.appendChild(animal);
        animal.id = 'animal'+ index;
        animal.style.with = '100px';
        animal.style.height = '100px';
        animal.style.background = 'red';
        animal.addEventListener('click', onClick,false);
    
            function onClick(e){
                console.log(e.target.id);
            }
        
    }
    
        

}