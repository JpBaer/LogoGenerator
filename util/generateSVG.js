//This function parses the data object and creates html specific to each shape provided
//returns html to be input into the write file function
// const Circle = require('./shape');
// const Square = require('./shape');
// const Triangle = require('./shape')
const shape = require('./shape')

function generateSVG(data){
    if(data.shape == 'circle'){
        const newShape = new shape.Circle(data.shapeColor);
        console.log(newShape)
        console.log('in the circle loop')

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${newShape.render()}
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
      
      </svg>`
    }
    else if(data.shape == 'square'){
        const newShape = new shape.Square(data.shapeColor);
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${newShape.render()}
        <text x="125" y="118" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
      
        </svg>`
    }
    else if(data.shape == 'triangle'){
        const newShape = new shape.Triangle(data.shapeColor);

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${newShape.render()}
        <text x="150" y="130" font-size="40" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
      
        </svg>`
    }

    else{
        return err
    }
}

//allows function to be called in main js file
module.exports = generateSVG