let Pluto = 0
let pippo = 0
basic.forever(function () {
    while (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        Pluto = randint(1, 6)
        if (Pluto == 1) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        }
        if (Pluto == 2) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        }
        if (Pluto == 3) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # # # # #
                . # . # .
                . . # . .
                `)
        }
        if (Pluto == 4) {
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . # . . .
                # . . . .
                `)
        }
        if (Pluto == 5) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
        if (Pluto == 6) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
        }
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
    }
    while (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Heart)
        pippo = randint(5, 18)
        while (pippo) {
            basic.pause(500)
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . # . . .
                # . . . .
                `)
            basic.pause(500)
            basic.showLeds(`
                . . . . .
                . # . . .
                . . # . .
                . . . # .
                . . . . .
                `)
            pippo += -1
        }
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
        basic.showIcon(IconNames.Skull)
    }
})
