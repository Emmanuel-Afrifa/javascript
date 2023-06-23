function makeConsecutiveArray2(statues){
    let sortedStatues = statues.sort((a,b) => a - b);
    //console.log(sortedStatues);
    return sortedStatues.map((acc,cur) => {
        if (Math.abs(cur - acc) > 1){
            return Math.abs(cur - acc) + 1
        }
        else {
            return 1;
        }
    })

}

s1 = [6,2,3,8]
console.log(makeConsecutiveArray2(s1))