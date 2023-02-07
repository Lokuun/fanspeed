let Speed = 0
OLED.init(128, 64)
basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
        Speed = 500
        pins.analogWritePin(AnalogPin.P1, Speed)
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P0)) {
        Speed = 0
        pins.analogWritePin(AnalogPin.P1, Speed)
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P0)) {
        Speed = Speed + 100
        pins.analogWritePin(AnalogPin.P1, Speed)
    }
    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P0)) {
        Speed = Speed - 100
        pins.analogWritePin(AnalogPin.P1, Speed)
    }
})
basic.forever(function () {
    OLED.writeStringNewLine("Speed")
    OLED.writeNumNewLine(Speed)
})
