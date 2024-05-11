type State = "habited" | "habitable" | "uninhabitable" | "unexplored"

type Planet = {
  name: string
  mass: number
  coordinates: [number, number]
  state: State
}

const solarSystem: Planet[] = []

function addPlanet() {
  const name = String(prompt("Enter planet name: "))
  if (solarSystem.some((p) => p.name === name)) throw new Error("Planet already exists in the solar system")

  const mass = Number(prompt("Enter planet mass: "))
  const coordinates = String(prompt("Enter planet coordinates: "))
  const state = String(prompt("Enter planet state (habited, habitable, uninhabitable, unexplored): ")) as State
  if (!["habited", "habitable", "uninhabitable", "unexplored"].includes(state)) throw new Error("Invalid state")

  const [lon, lat] = coordinates.split(",").map(Number)

  const newPlanet: Planet = {
    name,
    mass,
    coordinates: [lon, lat],
    state,
  }

  solarSystem.push(newPlanet)

  alert(`Planet ${name} added`)
  console.table(newPlanet)
}

function changePlanet(planet: string) {
  const planetFound = solarSystem.find((p) => p.name === planet)
  if (!planetFound) throw new Error("Planet not found")

  const state = String(prompt("Enter planet state (habited, habitable, uninhabitable, unexplored): ")) as State
  if (!["habited", "habitable", "uninhabitable", "unexplored"].includes(state)) throw new Error("Invalid state")

  planetFound.state = state

  alert(`Planet ${planet} changed to ${state}`)
  console.table(planetFound)
}

function removePlanet(planet: string) {
  const planetFound = solarSystem.find((p) => p.name === planet)
  if (!planetFound) throw new Error("Planet not found")

  solarSystem.splice(solarSystem.indexOf(planetFound), 1)

  alert(`Planet ${planet} removed`)
}

function listPlanets() {
  if (!solarSystem.length) throw new Error("No planets in the solar system")
  console.table(solarSystem)
}

let isStop: boolean = true

while (isStop) {
  const command = prompt("Enter command (add, change, remove, list, exit): ")

  switch (command) {
    case "add":
      addPlanet()
      break
    case "change":
      if (solarSystem.length > 0) {
        const planet = String(prompt("Enter planet name: "))
        changePlanet(planet)
      } else alert("No planets in the solar system")
      break
    case "remove":
      if (solarSystem.length > 0) {
        const planetName = String(prompt("Enter planet name: "))
        removePlanet(planetName)
      } else alert("No planets in the solar system")
      break
    case "list":
      if (solarSystem.length > 0) {
        listPlanets()
      } else alert("No planets in the solar system")
      break
    case "exit":
      alert("Exiting...")
      isStop = false
      break
    default:
      alert("Invalid command")
  }
}
