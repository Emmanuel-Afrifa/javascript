let testArray = ['(bar)','foo(bar)bar','foo(((bar)))bar(biin)'];

function solution(inputString){
    let x = inputString
    while(x.includes('(')){
        let closeBracket = x.indexOf(')');
        let openBracket = x.lastIndexOf('(', closeBracket);

        let subStrSlice = x.slice(openBracket+1, closeBracket).split('').reverse().join('')
        //console.log('carrr')
        x = x.slice(0,openBracket) + subStrSlice + x.slice(closeBracket + 1);

    }


    return x
}

console.log(solution(testArray[0]));
console.log(solution(testArray[1]));
console.log(solution(testArray[2]));
solution(testArray[1])