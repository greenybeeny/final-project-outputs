// when the microbit receives a number from the input microbit
radio.onReceivedNumber(function (receivedNumber) {
    // if the microbit receives the number 1
    // if the microbit receives the number 0 then it tells that there is no movement
    if (receivedNumber == 1) {
        // make the LED flash 4 times
        for (let index = 0; index < 4; index++) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(500)
        }
        // this makes the LED on the microbit flash in and out like a visible alarm
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Square)
            basic.pause(500)
            basic.showIcon(IconNames.SmallSquare)
            basic.pause(500)
        }
        // make the buzzer go off 4 times
        for (let index = 0; index < 4; index++) {
            music.setVolume(255)
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(500)
            music.playMelody("C5 C C5 C C5 C C5 C ", 60)
        }
    } else if (receivedNumber == 0) {
        basic.showString("No Movement")
        basic.showIcon(IconNames.Yes)
    }
})
// our radio group is 200
radio.setGroup(200)
