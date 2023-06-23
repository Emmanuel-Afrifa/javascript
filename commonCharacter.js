let testArray = ['aabcc', 'adcaa'];

function commonCharacterCount(s1,s2){
    let x = s1.split('');
    let y = s2;
    let poppedX;

    let counter = 0;
    while(x.length){

        poppedX = x.pop();

        if (y.includes(poppedX)){
            counter++;
            y = y.replace(poppedX, '');
        }
    }
    return counter;
}

console.log(commonCharacterCount(testArray[0], testArray[1]));