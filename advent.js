const fs = require('fs')
const path = require('path')

const [year, day] = process.argv.slice(2)

function getInputFromFile(delimiter) {
    delimiter = delimiter || '\r\n'
    const inputPath = path.join(__dirname, year, `Day${day}`, 'input.txt')
    let input = null
    if (fs.existsSync(inputPath)) {
        input = fs.readFileSync(inputPath).toString().split(delimiter).map(line => line.trim())
    }
    return input
}

console.log(`Running ${year}, Day ${day}`)

const [part1, part2] = require(`./${year}/Day${day}`)(getInputFromFile)

console.log(`\n---- Part 1 ----\n${part1}`)
console.log(`\n---- Part 2 ----\n${part2}\n`)