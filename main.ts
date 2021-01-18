input.onButtonPressed(Button.A, function () {
    drehzahl = drehzahl * -1
    PCA9685.setCRServoPosition(PCA9685.ServoNum.Servo1, drehzahl, 64)
    PCA9685.setCRServoPosition(PCA9685.ServoNum.Servo2, drehzahl, 64)
    PCA9685.setCRServoPosition(PCA9685.ServoNum.Servo3, drehzahl, 64)
    PCA9685.setCRServoPosition(PCA9685.ServoNum.Servo4, drehzahl, 64)
})
input.onButtonPressed(Button.B, function () {
    PCA9685.init(64, 0)
})
let drehzahl = 0
drehzahl = 30
basic.showIcon(IconNames.Heart)
PCA9685.init(64, 0)
