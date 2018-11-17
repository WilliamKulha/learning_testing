import { Triangle } from './../src/project.js';

describe('Triangle', function() {

    it('should return equilateral for a triangle which has three equal sides', function() {
        let equal = new Triangle(3, 3, 3);
        expect(equal.checkType()).toEqual("equilateral");
    })

    it('should correctly determine whether three lengths can be made into a triangle', function() {
        let testTriangle = new Triangle(3, 4, 29);
        expect(testTriangle.checkType()).toEqual("not a triangle");
    });

    it('should return isosceles for a triangle which has two sides of equal length', function () {
        let testTriangle = new Triangle(3, 3, 5);
        expect(testTriangle.checkType()).toEqual('isosceles');
    });

    it('should return scalene for a triangle the sides of which are all different lengths', function (){
        let testTriangle = new Triangle(3, 4, 5);
        expect(testTriangle.checkType()).toEqual('scalene');
    });

});