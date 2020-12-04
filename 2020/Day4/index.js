module.exports = function(getInput) {
    const input = getInput('\r\n\r\n')

    const allPassports = input.map(i => {
        let passport = {}
        i.split(/[\s+(\r\n)]/).filter(j => j).forEach(k => {
            const lineItem = k.split(':')
            passport[lineItem[0]] = lineItem[1]
        })
        return passport
    })

    const validEyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]

    const isHeightValid = (height) => {
        if (height.length < 4) {
            return false
        }

        const measure = height.substring(height.length-2)

        if (measure == 'in') {
            const inches = +height.substring(0, height.length-2)
            if (inches >= 59 && inches <= 76) {
                return true
            }
        } 
        if (measure == 'cm') {
            const cms = +height.substring(0, height.length-2)
            if (cms >= 150 && cms <= 193) {
                return true
            }
        }
        return false
    }

    let partOneCount = 0
    let partTwoCount = 0
    allPassports.forEach(passport => {
        if (
            passport.byr &&
            passport.iyr &&
            passport.eyr &&
            passport.hgt &&
            passport.hcl &&
            passport.ecl &&
            passport.pid
        ) {
            partOneCount++
        }
        if (
            passport.byr >= 1920 && passport.byr <= 2002 &&
            passport.iyr >= 2010 && passport.iyr <= 2020 &&
            passport.eyr >= 2020 && passport.eyr <= 2030 &&
            passport.hgt && isHeightValid(passport.hgt) &&
            passport.hcl && passport.hcl.match(/^#[0-9a-fA-F]{6}$/) &&
            passport.ecl && validEyeColors.includes(passport.ecl) &&
            passport.pid && passport.pid.match(/^\d{9}$/)
        ) {
            partTwoCount++
        }
    })

    return [
        `There are ${partOneCount} valid "passports"`,
        `There are ${partTwoCount} valid "passports"`
    ]
}