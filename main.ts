input.onButtonPressed(Button.A, function () {
    Ship.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Laser = game.createSprite(Ship.get(LedSpriteProperty.X), 4)
    music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    for (let index = 0; index < 5; index++) {
        basic.pause(100)
        Laser.change(LedSpriteProperty.Y, -1)
        if (Laser.isTouching(Alien)) {
            music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            game.addScore(1)
            Laser.delete()
            Alien.delete()
        }
    }
    Laser.delete()
})
input.onButtonPressed(Button.B, function () {
    Ship.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
let Alien: game.LedSprite = null
let Laser: game.LedSprite = null
let Ship: game.LedSprite = null
Ship = game.createSprite(2, 4)
let Time = 1000
game.setScore(0)
basic.forever(function () {
    Alien = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(Time)
        Alien.change(LedSpriteProperty.Y, 1)
    }
    if (game.score() <= 5) {
        Time = 1000
    } else if (game.score() <= 10) {
        Time = 500
    } else if (game.score() <= 15) {
        Time = 250
    }
    if (Alien.isTouchingEdge()) {
        game.gameOver()
    }
})
