let testArray = ['aba', 'aagfd', 'ad', 'acdhfkgf', 'gyuusaba'];

function allLongestStrings(str){
    let eleLength = 0;
    for (ele of str){
        eleLength = Math.max(eleLength, ele.length);
    }

    return str.filter((element)=>{
        if (element.length === eleLength){
            return element;
        }
    }
    )
}

console.log(allLongestStrings(testArray));