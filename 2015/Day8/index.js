module.exports = function(getInput) {
    const input = getInput()

    let partOneDifference = 0

    input.forEach(line => {
        let actualLength = line.length
        let parsedLength = actualLength - 2 // to account for quotes

        let asArray = Array.from(line.substring(1,line.length-1))

        for (let i = 0; i < asArray.length; i++) {
            if (asArray[i] == '\\') {
                if (asArray[i+1] == 'x') {
                    parsedLength -= 3
                    i += 3
                    continue
                }
                parsedLength--
                i++
            }
        }

        partOneDifference += (actualLength - parsedLength)
    })


    let partTwoDifference = 0

    input.forEach(line => {
        let actualLength = line.length
        let parsedLength = actualLength + 4 // to account for quotes

        let asArray = Array.from(line.substring(1,line.length-1))

        for (let i = 0; i < asArray.length; i++) {
            if (asArray[i] == '\\') {
                if (asArray[i+1] == 'x') {
                    parsedLength++
                    i += 3
                    continue
                }
                parsedLength += 2
                i++
            }
        }

        partTwoDifference += (parsedLength - actualLength)
    })


    return [
        `The difference in raw and parsed length is ${partOneDifference} characters!`,
        `The difference in parsed and raw length is ${partTwoDifference} characters!`
    ]
}