let guardarNum = []

function adicionarNum() {
    let numeros = document.getElementById('inNum')
    let valor = Number(numeros.value)
    const checarValores = guardarNum.some((numero) => {
        return numero == valor
    })
    if (valor == '') {
        alert(`Por favor, digite algum número entre 1 e 100!`)
    } else if (checarValores) {
        alert(`Esse número ja foi adicionado!`)
        numeros.value = ``
    } else if (valor > 100 || valor == 0) {
        alert(`Digite um número entre 1 e 100!`)
        numeros.value = ''
    } else {
        guardarNum.push(valor)
        console.log(guardarNum)
        numeros.value = ''
        const caixaTexto = document.getElementById('textarea')
        const textos = guardarNum.map((valor) => `Valor ${valor} adicionado!`).join("\n");
        caixaTexto.innerHTML = textos
        info1.innerText = ``
        info2.innerText = ``
        info3.innerText = ``
        info4.innerText = ``
        info5.innerText = ``
    }
}

function finalizar() {
    const info1 = document.getElementById('info1')
    const info2 = document.getElementById('info2')
    const info3 = document.getElementById('info3')
    const info4 = document.getElementById('info4')
    const info5 = document.getElementById('info5')
    const max = Math.max(...guardarNum)
    const min = Math.min(...guardarNum)
    if (guardarNum == '') {
        alert(`Por favor, digite algum número entre 1 e 100!`)
    } else {
        info1.innerText = `Ao todo, temos ${guardarNum.length} números cadastrados.`
        info2.innerText = `O maior valor informado foi ${max}`
        info3.innerText = `O menor valor informado foi ${min}`

        const total = guardarNum.reduce((total, valorAtual) => {
            return total += valorAtual
        }, 0)
        info4.innerText = `A soma total dos valores é ${total}`

        const media = total / guardarNum.length

        info5.innerText = `A média dos valores informados é ${Math.abs(media.toFixed(2))}`
    }
}

function limpar() {
    location.reload()
}