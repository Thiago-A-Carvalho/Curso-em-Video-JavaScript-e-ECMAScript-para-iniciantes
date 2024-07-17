function contar() {
    let ini = document.getElementById('txti')  // let é a mesma coisa que var, mas facilita na questão de escolpo
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar.'
       // window.alert('[EROO] Faltam dados.')
    } else {
        res.innerHTML = 'Contando:<br>' // break row para pular uma inha no HTML
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido. Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
