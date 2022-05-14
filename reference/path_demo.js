const path = require('path');

//Full path
console.log(__filename); 

//Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));  // Since it's an object access properties via .
                                      // console.log(path.parse(__filaname).base);

// Concatenate paths
//../test/hello.html
console.log(path.join(__dirname, "test", "hello.html"))