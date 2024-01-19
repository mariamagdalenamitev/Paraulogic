const secreta= 'PAPER'

function llegirParaula(){
    let paraula=document.getElementById('solucions').value.toUpperCase()
console.log(paraula)

    if (paraula===secreta){
        window.alert('Has guanyat!')
        document.getElementById()
    }
let secreta= 'i';

novaEntrada= ' ';
novaEntrada=<div class="slot"></div>

    if (paraula.length===secreta.lenght){
        for (let i = 0; i<5; i++){
            document.getElementById('solucions')
            //fer un chartAt per cada lletra (lletra per lletra) i després afegir-li la nova entrada
        }
    }else{
        window.alert('La paraula no té la mida correcta')
        document.getElementById()
    }

    /*function comprovarLletra(paraula, lletra){
    document.getElementById(paraula.includes(lletra)).innerHTML*/
}

//Si per exemple una paraula té tres "a" i una està ben col·locada però les altres dues no, aquestes dues no se pinten de groc
//Fer un for per pintar les lletres amb "div"

/*function posicioCaracter(paraula,lletra){
    console.log(paraula.charAt(lletra))
}
posicioCaracter('Jaume',2); //u
posicioCaracter('Ensaïmada',5) //m */
