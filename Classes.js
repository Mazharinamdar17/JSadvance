//The code defines a Rectangle class with properties and methods to
//  calculate its area and print its color. 
// Let’s break it down step by step:

// 1  Class Declaration
class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color; 
    }
   
/*The constructor method initializes the object properties when a new instance is created.
It takes three parameters:
width: The width of the rectangle.
height: The height of the rectangle.
color: The color of the rectangle.
Note: If no value is passed for color, it will be undefined.*/



// 2 area() Method
    area() {
        const area = this.width * this.height;
          return area;
    }

//This method calculates the area of the rectangle using width * height.
//It returns the calculated area.
    
    
// 3 paint() Method
    paint() {
             console.log(`Painting with color ${this.color}`);
    }
    //This method logs the color of the rectangle to the console.
    //Example output (if color = "red"):
    
 }
 

 // creating an instant of rectangle
 const rect = new Rectangle(2, 4)
 /*
  This creates an object rect of class Rectangle with:
width = 2
height = 4
color = undefined (since no color is provided)

  */
 const area = rect.area();
 console.log(area)

/*Calls the area() method on rect, which returns: */

