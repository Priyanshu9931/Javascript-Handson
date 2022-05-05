
// I work for NGO.


/* I love to teach and play with kids */

// Setup
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  function checkObj(obj, checkProp) {
    // Only change code below this line
   
   var checkObj = {
     gift: "pony",
     pet: "kitten",
     bed: "sleigh",
     city: "Seattle",
   }
    if(checkObj.hasOwnProperty(checkProp)){
     return checkObj[checkProp];
   } else {
   return "Not Found";
    
    
    // Only change code above this line
   }
   }