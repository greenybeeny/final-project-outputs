// when the microbit receives a number from the input microbit
radio.onReceivedNumber(function (receivedNumber) {
    // if the microbit receives the number 1
    // if the microbit receives the number 0 then it tells that there is no movement
    if (receivedNumber == 1) {
        // make the buzzer go off 4 times
        for (let index = 0; index < 1; index++) {
            music.setVolume(255)
            music.playMelody("C5 C C5 C C5 C C5 C ", 90)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(500)
            for (let index = 0; index < 25; index++) {
                images.createBigImage(`
                    # # # # # . . . . .
                    # . . . # . # # # .
                    # . . . # . # . # .
                    # . . . # . # # # .
                    # # # # # . . . . .
                    `).scrollImage(1, 7.5)
            }
        }
    } else if (receivedNumber == 0) {
        basic.pause(500)
        for (let index = 0; index < 1; index++) {
            images.createBigImage(`
                # . . . # . # # # .
                # # . . # . # . # .
                # . # . # . # . # .
                # . . # # . # . # .
                # . . . # . # # # .
                `).scrollImage(1, 100)
        }
        basic.pause(500)
    } else if (receivedNumber == 2) {
        for (let index = 0; index < 1; index++) {
            images.createBigImage(`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                `).scrollImage(1, 500)
        }
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
// our radio group is 200
radio.setGroup(200)
let receivedNumber = 2
