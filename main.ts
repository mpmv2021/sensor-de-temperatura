let temperatura_corrigida = 0
let temperatura = 0
let valor_correcção = 3
basic.forever(function () {
    temperatura = input.temperature()
    temperatura_corrigida = temperatura - valor_correcção
    basic.showNumber(temperatura_corrigida)
    basic.pause(1000)
})
