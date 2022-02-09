class Computer {
  constructor(brand, color, monitorSize, hardDriveBrand, hardDriveSize) {
    this.brand = brand;
    this.color = color;
    this.monitorSize = monitorSize;
    this.hardDrive = {
      brand: hardDriveBrand,
      size: hardDriveSize,
    };
  }
  newHardDriveSize(newSize) {
    this.hardDrive.size = newSize;
  }
}

export default Computer;
