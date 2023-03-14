//Defines the shape classes and provides a render() function to generate unique html

class Shape{
    constructor(color){
        this.color = color; 
       }
       
}

//define triangle class
class Triangle extends Shape {
    constructor(color){
    super(color)
    
}
render(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
}}

//define square class
class Square extends Shape {
    constructor(color){
        super(color)
        
    }
    render(){
           return `<rect x="50" y="25" width="150" height="150" fill="${this.color}" />`
    }
}

//define circle class
class Circle extends Shape {
    constructor(color){
        super(color)
        
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
        
    }
}




//exporting classes
module.exports=  {
    Triangle: Triangle,
    Circle: Circle,
    Square: Square};


