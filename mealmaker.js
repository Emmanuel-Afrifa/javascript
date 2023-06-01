const menu = {
    _meal : '',
    _price : 0,
    set meal(mealToCheck){
      if (typeof mealToCheck === 'string'){
        return this._meal = mealToCheck;
      }
    },
    
    set price(priceToCheck){
      if (typeof priceToCheck === 'number'){
        return this._price = priceToCheck;
      }
    },
  
    get todaysSpecial(){
      if (this._meal && this._price){
        return `Today's Special is ${this._meal} for ${this._price}ghc`;
      }
      else {
        return 'Meal or price was not correctly set';
      }
    }
  }


let meals = ['Jollof Rice', 'Fried Rice', 'Banku & Tilapia', 'Waakye with Fish and Chicken'];
let prices = [40, 45, 60, 50];

const mealpicker = Math.floor(Math.random()*4);
const pricepicker = Math.floor(Math.random()*4);
  
menu.meal = meals[mealpicker];
menu.price = prices[pricepicker];
  
console.log(menu._meal);
console.log(menu._price);

console.log(menu.todaysSpecial);

  