// var commandLineArgs = process.argv;
// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;

// console.log(profileDataArgs);
//
// Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     // Is the same as this...
// //   profileDataArr.forEach((profileItem) => {
// //     console.log(profileItem)
// //   });
//     profileDataArr.forEach(profileItem => console.log(profileItem));

// };

// printProfileData(profileDataArgs);

//create html template 
// backticks(`) insert variables inside function block
// return adds multi line input at line breaks - cleaner code
const generatePage = (name, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};

console.log(name, github);
console.log(generatePage(name, github));
