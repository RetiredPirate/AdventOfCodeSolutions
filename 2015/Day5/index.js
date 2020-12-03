module.exports = function(getInput) {
    const input = getInput()
    let niceCount = 0

    input.forEach(name => {
        if (name.includes("ab") || name.includes("cd") || name.includes("pq") || name.includes("xy")) {
            return
        }

        const vowels = 'aeiou'
        const nameAsArray = Array.from(name)
        const vowelCount = nameAsArray.filter(char => vowels.includes(char)).length

        if (vowelCount < 3) {
            return
        }

        let hasDoubleLetter = false
        nameAsArray.reduce((a, b) => {
            if (a == b) {
                hasDoubleLetter = true
            }
            return b
        }, '_')

        if (!hasDoubleLetter) {
            return
        }

        niceCount++
    })

    let niceCount2 = 0

    input.forEach(name => {
        const nameAsArray = Array.from(name)
        
        let meetsRule1 = false
        let pairs = []
        for(let i = 0; i < name.length-1; i++) {
            let newPair = name.substring(i, i+2)
            if (pairs.slice(0, -1).includes(newPair)) {
                meetsRule1 = true
                break
            }
            pairs.push(newPair)
        }

        let meetsRule2 = false
        for(let i = 0; i < nameAsArray.length-2; i++) {
            if (nameAsArray[i] == nameAsArray[i+2]) {
                meetsRule2 = true
                break
            }
        }

        if (meetsRule1 && meetsRule2) {
            niceCount2++
        }
    })

    return [
        `There are ${niceCount} names on the nice list!`,
        `There are ${niceCount2} names on the nice list!`
    ]
}