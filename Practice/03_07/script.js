/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const computer = {
  brand: "Dell",
  color: "gray",
  monitorSize: 15,
  hardDrive: {
    brand: "Western Digital",
    size: 500,
    changeSize: function (newSize) {
      this.size = newSize;
      console.log("New Size", this.size);
    },
  },
};

console.log(computer.hardDrive.brand);
