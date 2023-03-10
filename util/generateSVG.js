function generateSVG(data){
    if(data.shape == 'circle'){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${data.shape} cx="150" cy="100" r="80" fill="${data.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
      
      </svg>`
    }
    else if(data.shape == 'square'){
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <${data.shape} width="300" height="300" fill="${data.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
      
        </svg>`
    }
    else if(data.shape == 'triangle'){
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,0 300,0 150,150" fill="${data.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
      
        </svg>`
    }

    else{
        return err
    }
}

module.exports = generateSVG