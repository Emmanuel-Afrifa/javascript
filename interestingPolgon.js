function shapeArea(n){
    let previousArea = 1;
    if (n === 1){
        return previousArea;
    }
    else {
        for (let i=1;i<n;i++){
            
                previousArea += (i)*4;
               // console.log(previousArea)
            
        }
        return previousArea
    }
}

console.log(shapeArea(4))