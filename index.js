// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

let driver = "Ralph"

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.splice(-1)
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  [...drivers, name]
}
