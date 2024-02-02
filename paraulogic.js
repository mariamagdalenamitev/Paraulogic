//Agafar paraula aleatoria de la llista
let paraules = ['VIURE','TENDA','JUGAR','SEURE','PAPER'];
let secreta =paraules[Math.trunc(Math.random()*paraules.length)]
function llegirParaula() {
    let paraula = document.getElementById('resposta').value.toUpperCase()
    console.log(paraula);

    novaEntrada = '<div class="resposta" >';
    if (paraula.length === secreta.length) {
        for (let i = 0; i < 5; i++) {
            if (secreta.charAt(i) === paraula.charAt(i)) {
                novaEntrada += '<div class="slot green">'
                novaEntrada += paraula.charAt(i)
                novaEntrada += '</div>'
            } else if (secreta.includes(paraula.charAt(i)) === true) {
                novaEntrada += '<div class="slot yellow">'
                novaEntrada += paraula.charAt(i)
                novaEntrada += '</div>'
            } else {
                novaEntrada += '<div class="slot">'
                novaEntrada += paraula.charAt(i)
                novaEntrada += '</div>'
            }
        }
        if (paraula === secreta) {
            window.alert('Has guanyat! Si vols tornar a jugar, reinicia la pàgina');
            document.getElementById('botoEnviar').disabled=true
        }
        novaEntrada+="</div>"
        document.getElementById('solucions').innerHTML += novaEntrada;
    } else {
        window.alert('La paraula no té la mida correcta');
    }
}

function imatgePista(){
    window.alert('La paraula té ' + secreta.length + ' lletres i lhas descriure en català');
}