const secreta= 'PAPER'

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
            window.alert('Has guanyat!');
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

//TODO només necessit una a, que no me pinti les demes(Només si me sobra temps)
//TODO programar tecla intro
//TODO programar que me pinti les lletres del teclat a dins el requadre de la paraula, i a poder ser que me pinti les lletres