let countries = {"Canada":{"neighbors":["The United States"]},"The United States":{"neighbors":["Canada","Mexico"]},"Mexico":{"neighbors":["The United States","Belize","Guatemala"]},"Belize":{"neighbors":["Mexico","Guatemala"]},"Guatemala":{"neighbors":["Mexico","Belize","El Salvador","Honduras"]},"El Salvador":{"neighbors":["Guatemala","Honduras"]},"Honduras":{"neighbors":["Guatemala","El Salvador","Nicaragua"]},"Nicaragua":{"neighbors":["Honduras","Costa Rica"]},"Costa Rica":{"neighbors":["Nicaragua","Panama"]},"Panama":{"neighbors":["Costa Rica"]}}

let currentCountryName = "The United States"

let prompt = () => {
    console.log(`You are in ${currentCountryName}. You can travel from here to the following countries: ${countries[currentCountryName].neighbors.join(", ")}`)
}

let goTo = (destinationName) => {
    if (countries[currentCountryName].neighbors.includes(destinationName)) {
        currentCountryName = destinationName
    } else {
        console.log(`${destinationName} does not border ${currentCountryName}.`)
    }
    prompt()
}

console.log(`Type "goTo(<country name>)" to travel to a neighboring country.`)
prompt()