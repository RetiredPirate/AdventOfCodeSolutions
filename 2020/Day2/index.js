module.exports = function(getInput) {
    const input = getInput()

    let validCount1 = 0
    
    input.forEach(line => {
        const [policy, password] = line.split(':')
        
        const [counts, letter] = policy.split(' ')
        const [min, max] = counts.split('-')
        
        let charCount = 0
        passwordChars = Array.from(password.trim())
        passwordChars.forEach(char => {
            if (char == letter) {
                charCount++
            }
        })
        
        if (charCount >= +min && charCount <= +max) {
            validCount1++
        }
    })

    let part1 = `There are ${validCount1} valid passwords!`


    // Part 2
    let validCount2 = 0

    input.forEach(line => {
        const [policy, password] = line.split(':')
        
        const [counts, letter] = policy.split(' ')
        const [pos1, pos2] = counts.split('-')
        
        passwordChars = Array.from(password.trim())
        
        let char1 = passwordChars[pos1-1]
        let char2 = passwordChars[pos2-1]
        
        if (char1 == char2) {
            return
        }
        
        if (char1 == letter || char2 == letter) {
            validCount2++
        }
    })

    let part2 = `There are ${validCount2} valid passwords!`
    return [part1, part2]
}