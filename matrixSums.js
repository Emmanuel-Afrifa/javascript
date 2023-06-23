let testArray = [[0,1,1,2],[0,5,0,0],[2,0,3,3]];

function MatrixElementsSum(matrix){
    // for (ele of testArray){
    //     console.log(ele)
    // }

    let counter = 0;
    for (let i=0; i<matrix[0].length; i++){
        for (let j=0; j<matrix.length; j++){
            if (matrix[j][i] === 0){
                break;
            }
            else {
                counter += matrix[j][i];
            }
            //console.log(counter);
        }
    }
    return counter;
}

console.log(MatrixElementsSum(testArray))