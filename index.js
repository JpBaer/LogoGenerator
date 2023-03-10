//Logo Generator
//When prompted a user inputs text, color, and shape to generate a svg file
//Creare inquirer prompts for text, text color, shape, and shape color
//create a function to write to file
//Create a test file to ensure functionality of app

const inquirer = require('inquirer');
const fs = require('fs');

//Write file function

const writeToFile = (fileName, data) => {
    console.log(data)
    let svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${data.shape} cx="150" cy="100" r="80" fill="${data.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
  
  </svg>`

    fs.writeFile(fileName,svg,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('Your logo is being created')
        }
    })
}


//Init function
const init = () => {
//Inquirer asks user for the logo criteria and saves the data as an object
inquirer.prompt([{
    type: 'input',
    message: 'What text do you want in your logo?',
    name: 'text'
},
{
    type: 'input',
    message: 'What color do you want your text?',
    name: 'textColor'
},
{
    type: 'list',
    message: 'What shape do you want your logo?',
    choices: ['circle','triangle','square'],
    name: 'shape'
},
{
    type: 'input',
    message: 'What color do you want the logo?',
    name: 'shapeColor'
}
])
//data is passed to writefile function
// .then((data) => console.log(data))
.then((data) => writeToFile('logo.svg',data))

}

init()

//module.exports = init();
