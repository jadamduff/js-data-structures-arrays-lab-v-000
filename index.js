// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

let driver = "Ralph"

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}
