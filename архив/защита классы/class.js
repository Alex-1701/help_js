'use strict'

const PI = Math.PI;
/**
 * 
 *      a2
 *      |\
 *      | \
 *      |  \
 *   l1 |   \  l3 
 *      |    \
 *      |     \
 *      |______\
 *     a3   l2  a1
 *    *
 * 
 */


export default class Triangle {
    length3;
    angle1;
    angle2;

    // Углы в градусах.
    constructor(length3, angle1, angle2) {
        this.length3 = length3;
        this.angle1 = angle1;
        this.angle2 = angle2;
    }

    get angle3() {
        return 180 - this.angle1 - this.angle2;
    }

    /**
     * @param {number} value
     */
    set angle1(value) {
        this.angle1 = value;
    }

    /**
     * @param {number} value
     */
    set angle2(value) {
        this.angle2 = value;
    }

    /**
     * @param {number} value
     */
    set length3(value) {
        this.length3 = value;
    }

    get length1() {
        return this.length3 * Math.sin(this.angle1 * PI / 180) / Math.sin(this.angle3 * PI / 180);
    }

    get length2() {
        return this.length3 * Math.sin(this.angle2 * PI / 180) / Math.sin(this.angle3 * PI / 180);
    }

    get square() {
        let p = (this.length1 + this.length2 + this.length3) / 2;
        return Math.sqrt(p * (p - this.length1) * (p - this.length2) * (p - this.length3));
    }

    get circleRadius() {
        return (this.length1 * this.length2 * this.length3) / (4 * this.square);
    }

    draw(canvas) {
        let radius = this.circleRadius;
        console.log('radius ', radius);

        const frameHeight = 500;
        const frameWidth = 500;
        example.height = frameHeight;
        example.width = frameWidth;
        const scaling = frameHeight / (2 * radius);
        console.log('scaling = ', scaling);

        canvas.fillStyle = "white";
        canvas.fillRect(0, 0, example.width, example.height);

        canvas.arc(frameHeight / 2, frameWidth / 2, frameHeight / 2, 0, 2 * Math.PI);
        canvas.stroke();

        // Центр.
        canvas.beginPath();
        canvas.fillStyle = "black";
        canvas.lineWidth = 5;
        canvas.arc(radius * scaling, radius * scaling, 3, 0, 2 * Math.PI);
        canvas.stroke();

        let a = radius * scaling, b = radius * scaling,
            dot1X = 0, dot1Y = 0,
            dot2X = 0, dot2Y = 0,
            dot3X = 0, dot3Y = 0;

        // третья точка. По центру сверху.
        dot3X = radius * Math.cos(0 - PI / 2);
        dot3Y = radius * Math.sin(0 - PI / 2);
        let f3 = Math.acos(Math.round(1 - (this.length3 ** 2) / (2 * radius ** 2))); // радиан
        //console.log(Math.floor(1 - (this.length3 ** 2) / (2 * (radius ** 2))));
        //console.log(Math.round(1 - (this.length3 ** 2) / (2 * (radius ** 2))));
        console.log('f3', f3);
        canvas.strokeStyle = "red";
        canvas.beginPath();
        canvas.arc((dot3X) * scaling + a, (dot3Y) * scaling + b, 5, 0, 2 * Math.PI);
        canvas.stroke();


        // первая точка.
        let f2 = Math.acos(Math.round(1 - (this.length2 ** 2) / (2 * radius ** 2)));
        console.log('f2', f2);
        dot1Y = Math.round(radius * Math.cos(f2));
        dot1X = Math.round(radius * Math.sin(f2));
        console.log('первая точка', dot1X, dot1Y);
        canvas.strokeStyle = "orange";
        canvas.beginPath();
        canvas.arc((dot1X) * scaling + a, (dot1Y) * scaling + b, 5, 0, 2 * Math.PI);
        canvas.stroke();


        // вторая точка.
        let f1 = Math.acos(Math.round(1 - (this.length1 ** 2) / (2 * radius ** 2)));
        console.log('f1', f1);
        dot2Y = Math.round(radius * Math.cos(2 * PI - f1));
        dot2X = Math.round(radius * Math.sin(2 * PI - f1));
        console.log('вторая точка', dot2X, dot2Y);
        canvas.strokeStyle = "green";
        canvas.beginPath();
        canvas.arc((dot2X) * scaling + a, (dot2Y) * scaling + b, 5, 0, 2 * Math.PI);
        canvas.stroke();  
        
        
        canvas.beginPath();
        canvas.moveTo(dot1X * scaling + a, dot1Y * scaling + b);
        canvas.lineTo(dot2X * scaling + a, dot2Y * scaling + b);
        canvas.lineTo(dot3X * scaling + a, dot3Y * scaling + b);
        canvas.lineTo(dot1X * scaling + a, dot1Y * scaling + b);

        canvas.lineWidth = 2;
        canvas.strokeStyle = '#ff0000';
        canvas.stroke();
    }
}