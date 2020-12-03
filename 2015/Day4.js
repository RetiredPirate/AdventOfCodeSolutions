const md5 = require("md5")

const input = "yzbqklnj"

module.exports = function() {
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
    
    return [   
        `Correct nonce is ${partOneNonce}`,
        `Correct nonce is ${nonce}`
    ]
}