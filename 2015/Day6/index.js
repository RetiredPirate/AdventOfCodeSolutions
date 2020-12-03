module.exports = function(getInput) {
    const input = getInput()

    let toggleLights = new Array(1000)
    for(let i=0; i<1000; i++) {
        toggleLights[i] = new Array(1000)
    }

    let brightLights = new Array(1000)
    for(let i=0; i<1000; i++) {
        brightLights[i] = new Array(1000)
        for(let j=0; j<1000; j++) {
            brightLights[i][j] = 0
        }
    }

    const instructions = input.map(line => {
        const parsedLine = line.split(" ")
        const type = parsedLine[parsedLine.length-4]
        const [x1, y1] = parsedLine[parsedLine.length-3].split(",")
        const [x2, y2] = parsedLine[parsedLine.length-1].trim().split(",")

        return {type, x1: +x1, y1: +y1, x2: +x2, y2: +y2}
    })

    // part 1
    instructions.forEach(({type, x1, y1, x2, y2}) => {
        for(let i=x1; i<=x2; i++) {
            for(let j=y1; j<=y2; j++) {
                switch(type) {
                    case 'on':
                        toggleLights[i][j] = true
                        break
                    case 'off':
                        toggleLights[i][j] = false
                        break
                    case 'toggle':
                        toggleLights[i][j] = !toggleLights[i][j]
                }
            }
        }
    })

    const lightsOn = toggleLights.reduce((sum, row) => sum + row.filter(light => light).length, 0)

    // part 2
    instructions.forEach(({type, x1, y1, x2, y2}) => {
        for(let i=x1; i<=x2; i++) {
            for(let j=y1; j<=y2; j++) {
                switch(type) {
                    case 'on':
                        brightLights[i][j]++
                        break
                    case 'off':
                        brightLights[i][j] ? brightLights[i][j]-- : null
                        break
                    case 'toggle':
                        brightLights[i][j] += 2
                }
            }
        }
    })

    const totalBrightness = brightLights.reduce((a, b) => a.concat(b)).reduce((a, b) => a + b)

    return [
        `There are ${lightsOn} lights on!`,
        `The total brightness is ${totalBrightness}!`
    ]
}