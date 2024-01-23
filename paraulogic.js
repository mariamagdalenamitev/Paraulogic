const secreta= 'PAPER'

function llegirParaula() {
    let paraula = document.getElementById('resposta').value.toUpperCase()
    console.log(paraula);

    if (paraula === secreta) {
        window.alert('Has guanyat!')
        //programar que primer pinti la paraula i després posi el missatge
    }

    novaEntrada = '';


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
        document.getElementById('solucions').innerHTML = novaEntrada;

    } else {
        window.alert('La paraula no té la mida correcta')
    }
}

/*function keyboard() {
    lletraQ = Q  lletraW = W  lletraE = E  lletraR = R  lletraT = T  lletraY = Y  lletraU = U  lletraI = I
    lletraO = O  lletraP = P  lletraA = A  lletraS = S  lletraD = D  lletraF = F  lletraG = G  lletraH = H
    lletraJ = J  lletraK = K  lletraL = L  lletraÑ = Ñ  lletraÇ = Ç  lletraZ = Z  lletraX = X  lletraC = C
    lletraV = V  lletraB = B  lletraN = N  lletraM = M

    document.getElementById('lletres').innerHTML = teclat
}*/
    /*function comprovarLletra(paraula, lletra){
    document.getElementById(paraula.includes(lletra)).innerHTML*/
