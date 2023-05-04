const timer = document.querySelector('#timer')
const btn_iniciar = document.querySelector('#btn_iniciar')
const btn_parar = document.querySelector('#btn_parar')
const btn_zerar = document.querySelector('#btn_zerar')
const btn_volta = document.querySelector('#btn_volta')
const resultado = document.querySelector('#resultado')

let tmp_ini = null
let intervalo = null

const contador = ()=>{
    const tmp_atual = Date.now()
    let seg = Math.floor((tmp_atual - tmp_ini) / 1000)
    console.log(seg)
    timer.innerHTML = converter(seg)
}

const converter = (seg)=>{
    const hora = Math.floor(seg/3600)
    const resto = seg % 3600
    const minuto = Math.floor(resto / 60)
    const segundo = Math.floor(resto % 60)
    const total = `${(hora < 10 ? '0'+hora : hora)}:${(minuto < 10 ? '0'+minuto : minuto)}:${(segundo < 10 ? '0'+segundo : segundo)}`
    return total
}



btn_iniciar.addEventListener('click', ()=>{
    tmp_ini = Date.now()
    intervalo = setInterval(contador, 1000)
})

btn_parar.addEventListener('click', ()=>{
    clearInterval(intervalo)
})

btn_zerar.addEventListener('click', ()=>{
    tmp_ini = Date.now()
    resultado.innerHTML = ''
    timer.innerHTML = '00:00:00'
})

btn_volta.addEventListener('click', (evt)=>{
    const novaHora = document.createElement('div')
    novaHora.setAttribute('class', 'hora')
    novaHora.innerHTML = timer.innerHTML
    resultado.appendChild(novaHora)

})
