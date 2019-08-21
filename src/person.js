const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 18;
 
const isSenior = (ageLimit)=> ageLimit >= 65;
// export default isSenior
export {isAdult,canDrink , isSenior as default}