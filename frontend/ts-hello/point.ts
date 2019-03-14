
export class Point {  // z interfejcom oblikujemo izgled obljekta  // TO JE KLAS
    constructor(private x?: number, private y?: number){ // ? je optinal !!
    }

    drow() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

} 