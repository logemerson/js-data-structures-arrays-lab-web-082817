// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(newDriver) {
  drivers.push(newDriver);
}

function destructivelyPrependDriver(newDriver) {
  drivers.unshift(newDriver);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(newDriver) {
  return [...drivers, newDriver];
}

function prependDriver(newDriver) {
  return [newDriver, ...drivers];
}

function removeLastDriver() {
  return drivers.slice(0, -1);
}

function removeFirstDriver() {
  return drivers.slice(1, drivers.length);
}
