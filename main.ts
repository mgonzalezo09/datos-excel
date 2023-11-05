input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Umbrella)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
basic.forever(function () {
    serial.writeValue("temp", input.temperature())
    serial.writeValue("luz", input.lightLevel())
    serial.writeValue("sonido", input.soundLevel())
    basic.pause(1000)
})
