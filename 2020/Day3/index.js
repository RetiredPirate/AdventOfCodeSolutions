module.exports = function(getInput) {
    const input = getInput()

    const theMountain = input.map(line => Array.from(line.trim()))
    const mountainWidth = theMountain[0].length


    const slopes = [
        { x: 1, y: 1 },
        { x: 3, y: 1 },
        { x: 5, y: 1 },
        { x: 7, y: 1 },
        { x: 1, y: 2 },
    ]

    slopes.forEach((slope) => {
        let xIndex = 0
        let yIndex = 0
        slope.count = 0
        while (yIndex < theMountain.length) {
            if (theMountain[yIndex][xIndex % mountainWidth] == '#') {
                slope.count++
            }
            
            xIndex += slope.x
            yIndex += slope.y
        }
    })

    const allResults = slopes.reduce((result, slope) => result += `A slope of ${slope.x} over and ${slope.y} down encounters ${slope.count} trees.\n`, '')
    const multiplied = slopes.reduce((multi, slope) => multi *= slope.count, 1)

    return [
        `Encountered ${slopes[1].count} trees!`,
        `${allResults}\nAll counts multiplied equals: ${multiplied}`
    ]
}