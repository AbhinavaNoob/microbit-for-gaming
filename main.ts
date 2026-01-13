input.onButtonPressed(Button.A, function () {
    mouse.click()
})
input.onButtonPressed(Button.B, function () {
    mouse.rightClick()
})
let x = 0
mouse.startMouseService()
basic.forever(function () {
    mouse.movexy(pins.map(
    x,
    0,
    1023,
    0,
    10
    ), 0)
    x = input.acceleration(Dimension.X)
})
