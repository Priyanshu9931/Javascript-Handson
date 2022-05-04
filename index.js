
// I work for NGO.


/* I love to teach and play with kids */


function myLocalScope() {
    // Only change code below this line
   var myVar ="hii";
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);