







//  1) if num is less than or equal to 400 feet returns 'This one is on me!'
//  2) else if num is between 400 and 2000 feet: (condition && condition)
//     returns 'That will be twenty bucks.'
//  3)  else if num over 2000 feet && num is less then 2500
//      returns  'I will gladly take your thirty bucks.'
//  4)  else if num over 2500 feet return 'No can do.'
const scuberGreetingForFeet = (n) =>{
  if (n <= 400) {
    return "This one is on me!"
  }else if (n >= 400 && n <= 2000) {
    return "That will be twenty bucks."
  } else if (n > 2000 && n <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (n > 2500) {
    return "No can do.";
  };
}

// 1) when the city (str) is 'NYC', return "Ok, sounds good." : "No go."
//    I need way more practice with this syntax lol 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
const ternaryCheckCity = (str) => {
  return (str === "NYC" ? "Ok, sounds good." : "No go.");
}

// 1) should return "Thank you so much." if the tip is generous
// 2) should return "Thank you." if the tip is not as generous:
// 3) should return "Bye." if anything else => default
const switchOnCharmFromTip = (tip) => {
  switch (tip) {
    case "generous" :
      return "Thank you so much.";
      case "not as generous" :
        return "Thank you.";
        default : return "Bye.";
  };
};
