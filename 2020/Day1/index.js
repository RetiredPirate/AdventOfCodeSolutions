module.exports = function(getInput) {
    const input = getInput()
    let response = []

    input = input.map(item => +item)

    // Part 1    
    input.forEach((num1, index) => {
        input.slice(index).forEach(num2 => {
            if (num1 + num2 == 2020) {
                response.push(`${num1} + ${num2} = 2020\n${num1} * ${num2} = ${num1 * num2}`)
            }
        })
    })
    
    
    // Part 2    
    let done = false;
    input.forEach((num1, index1) => {
        input.slice(index1).forEach((num2) => {
            input.slice(index1).forEach(num3 => {
                if (done) return;
                if (num1 + num2 + num3 == 2020) {
                    response.push(`${num1} + ${num2} + ${num3} = 2020\n${num1} * ${num2} * ${num3} = ${num1 * num2 * num3}`)
                    done = true;
                }
            })
        })
    })

    return response
}