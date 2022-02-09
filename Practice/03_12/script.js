/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Computer from "./Computer.js";

const myComputer = new Computer("Dell", "gray", 15, "Western Digital", 500);

console.log("HDD Size:", myComputer.hardDrive.size);

myComputer.newHardDriveSize(900);

console.log("HDD Size:", myComputer.hardDrive.size);
