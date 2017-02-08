/**
 * Created by daniel on 08-02-2017.
 */

/*

A) The declaration below defines a Shape class, whicha as it's only properties has a color field + a
getArea() and a getPerimeter() function which both returns undefined. This is the closest we get
to an abstract method in Java.
    class Shape {
    constructor (color){
        this . _color = color;
    }
    getArea () {
        return undefined ;
    }
    getPerimeter () {
        return undefined ;
    }
}
Provide the class with a nice (using template literals) toString() method + a getter/setter for the
    colour property. Test the class constructor, the getter/setter and the two methods.*/
class Shape {
    constructor (color){
        this.color = color;
    }
    getArea () {
        return undefined ;
    }
    getPerimeter () {
        return undefined ;
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }

    toString(){
        return ` This is the Color: ${this.color} `;
    }
}


let first = new Shape('Yellow');
console.log(first.toString());

first.setColor('Green');

console.log(`Getter: ${first.color}`);


/*
B) Create a new class Circle that should extend the Shape class.
Provide the class with:
● A radius field
● A constructor that takes both colour and radius.
● Overwritten versions of the three methods defined in the Base
● Getter/Setter for radius
    Test the class constructor, the getters/setters and the three methods.
    */

class Circle extends Shape{
    constructor(color, radiusfield){
        super(color);
        this.radiusfield = radiusfield;
    }

   getArea(){
        return Math.pow(this.radiusfield, 2) * Math.PI;
   }

   getPerimeter(){
       return 2 * this.radiusfield * Math.PI;
   }

   getRadiusField(){
       return this.radiusfield;
   }
   setRadiusField(radius){
       this.radiusfield = radius;
   }
}

let cir = new Circle('Blue',5);

console.log(`Radius: ${cir.getRadiusField()}
Area: ${cir.getArea()}
Perimeter: ${cir.getPerimeter()}
`);


/*
C) Create a new class Cylinder (agreed, not a perfect inheritance example) that should extend the Circle
class.
Provide the class with:
● A height field
● A constructor that takes colour, radius and height.
● Overwritten versions of the three methods defined in the Base ( getPerimeter() should
return undefined)
● A getVolume() method
● Getter/Setter for height
    Test the new class
    */

class Cylinder extends Circle{
    constructor(color, radius, height){
        super(color,radius)
        this.height = height;
    }
    getPerimeter(){
        return undefined;
    }

    getVolume(){
        return this.height * Math.PI * Math.pow(this.radiusfield,2);
    }
    get getRadiusField () {return this.radiusfield};
}

let cyl = new Cylinder("Red", 2,3);


console.log(cyl.getVolume());

console.log(cyl.radiusfield);

/*
D) The getX() methods (getArea(), getPerimeter() and getVolume()) are all candidates for a getter.
    Rewrite the three methods to use the getter syntax; that is console.log(circle.radius) instead
of console.log(circle.getRadius())

    ^^^ See above ^^^^
    */

