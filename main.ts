radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        for (let index = 0; index < 4; index++) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(500)
        }
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Square)
            basic.pause(500)
            basic.showIcon(IconNames.SmallSquare)
            basic.pause(500)
        }
        for (let index = 0; index < 4; index++) {
            music.setVolume(255)
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(500)
            music.playMelody("D - D - D - D - ", 60)
        }
    } else if (receivedNumber == 0) {
        basic.showString("No Movement")
        basic.showIcon(IconNames.Yes)
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        music.setVolume(255)
        music.playTone(698, music.beat(BeatFraction.Double))
    }
})
radio.setGroup(200)
