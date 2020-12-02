const md5 = require("md5")

const input = "yzbqklnj"


let nonce = 0
let partOneNonce

while (true) {
    const hash = md5(input + nonce)

    if (!partOneNonce && hash.substring(0,5) == "00000") {
        partOneNonce = nonce
    }

    if (hash.substring(0,6) == "000000") {
        break
    }

    nonce++
}

console.log("\n---- Part 1 ----")
console.log(`Correct nonce is ${partOneNonce}`)

console.log("\n---- Part 2 ----")
console.log(`Correct nonce is ${nonce}`)