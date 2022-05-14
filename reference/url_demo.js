const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString()); //same output

// Host (root domain)
console.log(myUrl.host ); // it will also include port if specified

// Hostname
console.log(myUrl.hostname); // same as host but no port

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add parameters
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through parameters
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));