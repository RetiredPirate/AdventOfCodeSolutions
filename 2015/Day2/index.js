module.exports = function(getInput) {
    const input = getInput()
    let paperArea = 0;
    let ribbonLength = 0;
    
    input.forEach(dimension => {
        const sides = dimension.split("x").map(len => +len).sort((a,b) => a - b)
                
        const face1 = sides[0]*sides[1]
        const face2 = sides[1]*sides[2]
        const face3 = sides[0]*sides[2]
        
        const area = 3*face1 + 2*face2 + 2*face3
        
        paperArea += area
        
        
        const volume = sides[0]*sides[1]*sides[2]
        const minPerimeter = 2*sides[0] + 2*sides[1]
        
        ribbonLength += (volume + minPerimeter)
    })

    return [
        "Total paper needed is " + paperArea,
        "Total ribbon needed is " + ribbonLength
    ]
}