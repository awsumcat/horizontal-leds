basic.forever(function () {
    for (let row = 0; row <= 4; row++) {
        for (let colunm = 0; colunm <= 4; colunm++) {
            led.plot(colunm, row)
        }
        basic.pause(100)
        basic.clearScreen()
    }
})
