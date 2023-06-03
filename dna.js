// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  function pAequorFactory(specimenNum, dna){
    return {
      specimenNum,
      dna,
      mutate() {
        let chosenDna = returnRandBase();
        let mutateDna = returnRandBase();
  
        
        while (chosenDna === mutateDna){
          mutateDna = returnRandBase();
          //console.log(mutateDna);
        }
  
        let replaceIndex = this.dna.indexOf(chosenDna);
        //console.log(replaceIndex)
  
        let newArr = this.dna.slice();
        newArr[replaceIndex] = mutateDna;
        return newArr;
  
      }, 
  
      compareDNA(pAequor){
        let commonDnaBase = 0;
        for (let i = 0; i < this.dna.length; i++){
          if (this.dna[i] === pAequor.dna[i]){
            commonDnaBase++;
          }
        }
  
        console.log(`Specimen ${pAequor.specimenNum} and specimen ${this.specimen} have ${(commonDnaBase/this.dna.length)*100}% DNA in common`);
      }, 
  
      willLikelySurvive(){
        let survivalRate = 0;
        for (let i = 0; i < this.dna.length; i++){
          if (this.dna[i] == 'C' || this.dna[i] == 'G'){
            survivalRate++;
          }
        }
  
        survivalRate = ((survivalRate/this.dna.length)*100).toFixed(0);
  
      if (survivalRate >= 60){
        return true;
      }
  
      }
  
    };
  }
  
  let tmp = [];
  for (let i = 1; i < 200; i++){
    let arr = pAequorFactory(i, mockUpStrand());
    if (arr.willLikelySurvive()){
      tmp.push(arr);
      if (tmp.length === 30){
        break;
      }
    }
  }
  
  console.log(tmp)
  
  // let hold = pAequorFactory(1,mockUpStrand());
  // console.log(hold.mutate())
  // console.log(hold.dna)
  
  
  
  
  