/*Build out a Diner menu in JAVASCRIPT. Here are your instructions
 to build that Diner.
Bottega Diner
Have the Main Menu and a Sides Menu
You get one entree and two side choices at regular cost.
- show them the entire menu (print out)
- A user selects an entree.
- “Waitress” makes a comment based on their selection
- comment can either be a comparison of the two items, or random comment
 pulled from a comment vault.
- Tell them the price
- repeat the above options for side choices (comment and a price)
- total up the cost

BONUS
Have a breakfast, lunch and dinner menu. Breakfast has different items, 
lunch and dinner have the same items but are different prices.

BONUS: Allow for item customization (how items are prepared, decide 
  additional cost implications)
*/

//Menu items
const menuItems = {
  Steak:10,
  Chicken:6,
  Potato:2,
  Fries:2,
  Carrots:1,
  Corn:1
}
function myMenu() {
  let menu = "";
for(const index in menuItems) {
  menu += `${index} : ${menuItems[index] + ", "}`;
}
alert(menu)
}

alert("Welcome to the Diner,\n Please continue for a list of menu items")

//Entree Selection



function myEntree() {
  entree = prompt("Please select either Steak or Chicken as your entree item.")
    switch(entree) {
      case null:
        alert("Please come back soon");
        break
      case "":
          alert("Please come back soon");
        break
      case "Steak":
        alert(`Excellent! ${entree} is a wonderful choice.\n`);
        return 
        break

      case "Chicken":
        alert(`Excellent! ${entree} is a wonderful choice.\n`);
        return entree;
        break             
      }
    }


function mySideOne() {
  const sideOne = prompt("Please select your first side dish from\n\tPotato\n\tFries\n\tCarrots\n\tCorn");
  switch(sideOne) {
    case null:
      alert("Please come back soon");
      break
    case "":
        alert("Please come back soon");
      break
    case "Potato":
      alert(`Perfect! your choice of ${sideOne} will go nicely with your ${entree}.`);
      return sideOne;
      break

    case "Fries":
      alert(`Perfect! your choice of ${sideOne} will go nicely with your ${entree}.`);
      return sideOne;
      break     
    case "Carrots":
      alert(`Perfect! your choice of ${sideOne} will go nicely with your ${entree}.`);
      return sideOne;
      break  
    case "Corn":
      alert(`Perfect! your choice of ${sideOne} will go nicely with your ${entree}.`);
      return sideOne;
      break          
    }
  }

function mySideTwo() {
  const sideTwo = prompt("Please select your second side dish from\n\tPotato\n\tFries\n\tCarrots\n\tCorn");
  switch(sideTwo) {
    case null:
      alert("Please come back soon");
      break
    case "":
        alert("Please come back soon");
      break
    case "Potato":
      alert(`Great Decision`);
      return sideTwo;
      break

    case "Fries":
      alert(`Great Decision`);
      return sideTwo;
      break     
    case "Carrots":
      alert(`Great Decision`);
      return sideTwo;
      break  
    case "Corn":
      alert(`Great Decision`);
      return sideTwo;
      break          
    }
  }

myMenu()
myEntree()
mySideOne()
mySideTwo()



//Price of their selection

//Side Selection

//Price of their selection

//Total cost
//const Total = 