//Logo Generator
//When prompted a user inputs text, color, and shape to generate a svg file
//Creare inquirer prompts for text, text color, shape, and shape color
//create a function to write to file
//Create a test file to ensure functionality of app

const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./util/generateSVG');


//Write file function

const writeToFile = (fileName, data) => {
    console.log(data)
    if(data.text.length > 3){
        console.log('Please only included 3 characters in your text');
        return
    }
    else{
    fs.writeFile(fileName,generateSVG(data),(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('Your logo is being created');
        }
    })}
}


//Init function
const init = () => {
//Inquirer asks user for the logo criteria and saves the data as an object
inquirer.prompt([{
    type: 'input',
    message: 'What text do you want in your logo? (3 characters max)',
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
