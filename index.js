//Conversion of celius to ferhenheit
function maxData()
{
    let data = parseFloat(document.getElementById('celsius').value);
    let input = (data * 9 / 5) + 32
    
    document.getElementById('para1').textContent = " The Fahrenheit is =" + " " + input;
}

//array sord order

var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
 
// Use sort() method to sort the strings
classification.sort() 
// Print sorted string array
document.getElementById('para2').innerHTML = classification;
let input = classification.slice(0,3);
document.getElementById('para3').innerHTML = input;
// let input2 = classification.slice(5,4,3);
// document.getElementById('para11').innerHTML = input2
//show course title
let data = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}
            
let arr = data.title;
document.getElementById('para4').innerHTML = 'Course Title is = ' + arr;

//show main category that is programming
let courses = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}

   let arr1  = courses.categories[0];
   document.getElementById('para5').innerHTML = 'The main category is  = ' + " " + arr1;

   //show percentage of 5 star
   function fiveStar() 
   {
    let fiveStars = 50; 
    document.getElementById('stars2').innerHTML = fiveStars;
    let fiveStars1 = parseInt(document.getElementById('stars2').value);
    if(fiveStars <= 0 )
        {
            document.getElementById('para6').innerHTML = 'Inter Greater than zero number'
        }else
        {
            let str = fiveStars1/fiveStars * 100;
            document.getElementById('para6').innerText = "your percentage is " + " " + str;
        }

   }

   //get last item and add infront of array
   var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
   document.getElementById('para7').innerHTML = shoppingList;
    const firstElement = shoppingList.pop();
//    document.getElementById('para8').innerHTML = firstElement;
   document.getElementById('para9').innerHTML = "Chocolate," + shoppingList;

   //adding two more items at the end
   var courses1 = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];
    courses1.push("Cheese, Eggs");
   document.getElementById('gigs').innerHTML = courses1;
   
   
