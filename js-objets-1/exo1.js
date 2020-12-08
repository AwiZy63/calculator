function Rectangle(length, width) {

    this.length = length;
    this.width = width;

    this.perimeter = function() {
        return (this.length * 2) + (this.width * 2);
    };
    
    this.area = function() {
        return (this.length * this.width);
    };

    this.isSquare = function() {
        if (this.length == this.width) {
            return true;
        }
    };

    this.setDisplay = function() {
        if (this.isSquare) {
            console.log("Longueur : " + this.length + " - " + "Largeur : " + width + " - " + "Périmètre : " + this.perimeter() + " - " + "Aire : " + this.area() + " - " + "Il s\'agit d\'un carré");
        } else {
            console.log("Longueur : " + this.length + " - " + "Largeur : " + width + " - " + "Périmètre : " + this.perimeter() + " - " + "Aire : " + this.area() + " - " + "Il ne s\'agit pas d\'un carré");
        }
    };
}

rectangle1 = new Rectangle(12, 60);
rectangle2 = new Rectangle(120, 120);
rectangle3 = new Rectangle(45, 80);

rectangle1.setDisplay();
console.log();
rectangle2.setDisplay();
console.log();
rectangle3.setDisplay();
console.log();