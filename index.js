// Add your Circle class here

// Shape calculator 
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.pi = Math.PI
    }

    // Getter methods
    get diameter(){
        return this.radius * 2;
    }

    get circumference(){
        return this.pi * this.diameter;
    }

    get area(){
        return this.pi * this.radius**2;
    }

    // Setter methods
    // Don't forget about PEMDAS
    set diameter(diameter){
        return this.radius = diameter / 2;
    }

    set circumference(circumference){
        return this.radius = (circumference / this.pi) / 2;
    }

    set area(area){
        return this.radius = Math.sqrt((area / this.pi));
    }
}