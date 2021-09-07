input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.clearScreen()
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.clearScreen()
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})
