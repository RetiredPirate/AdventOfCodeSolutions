function main(input) {
    let edges = []

    input.forEach(line => {
        const parsed = line.split(' ')
        edges.push({
            source: parsed[0],
            destination: parsed[2],
            distance: parsed[4]
        })
    })

    const shortestDistance = getShortestDistance(edges, [], 0)

    return [
        `The shortest distance is ${shortestDistance}!`
    ]
}


// given an array of visited locations, returns the shortest distance using the remaining locations
function getShortestDistance(allLocations, vistedLocations, distanceTraveled) {
    if (allLocations.length == vistedLocations.length) {
        return 0
    }

    const currentLocation = vistedLocations[vistedLocations.length-1]
    const notVisited = allLocations.filter(loc => !vistedLocations.includes(loc))

    const shortestDistances = notVisited.map(loc => {
        
        getShortestDistance(allLocations, )
    })
}




module.exports = (getInput) => main(getInput())