//Globale scope
var GlobaleName="Joe";

function something(){
    var GlobaleName="Jack";
    console.log(GlobaleName);
}

something();

console.log(GlobaleName);