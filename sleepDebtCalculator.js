function getSleepHours(day) {
    if (day === 'monday'){
      return 8;
    }
    else if (day === 'tuesday'){
      return 8;
    }
    else if (day === 'wednesday'){
      return 9;
    }
    else if (day === 'thursday'){
      return 8;
    }
    else if (day === 'friday'){
      return 9;
    }
    else if (day === 'saturday'){
      return 9;
    }
    else if (day === 'sunday'){
      return 10;
    }
  }
  
  const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours(9);
  
    if (actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep');
    }
    else if (actualSleepHours > idealSleepHours){
      console.log('You got more sleep than needed.');
      console.log(`You slept ${actualSleepHours-idealSleepHours} more hours than you needed`);
    }
    else if (actualSleepHours < idealSleepHours){
      console.log('You should get some rest');
      console.log(`You slept ${idealSleepHours-actualSleepHours} less than you needed to.`);
    }
  }
  
  calculateSleepDebt();