makerbit.onIrButton(IrButton.Right, IrButtonAction.Released, function () {
    cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Right, 150)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Released, function () {
    cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Left, 150)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Released, function () {
    cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 150)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Released, function () {
    cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Released, function () {
    cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Back, 150)
})
basic.showIcon(IconNames.Heart)
makerbit.connectIrReceiver(DigitalPin.P8, IrProtocol.Keyestudio)
basic.forever(function () {
    basic.showString("" + (images.iconImage(IconNames.Heart)))
})
