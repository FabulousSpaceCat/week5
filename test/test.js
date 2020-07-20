// Go find the module assert so I can use it.

var assert = require("assert");
var triangle = require("../triangle.js");

// test triangle.js, assert that passing those values in give you a result equal to 50.

describe("Area of triangle function", function() {
    it("when 10 and 10 are passed in function should return 50", function() {
        assert.equal(triangle(10,10),50);
    });
});



// This is testing an array, from class.  It's saying check the index of the array given (from 1-3) for an index of 4.  If 4 is not present, return -1.

describe ("Array", function() {
    describe("#indexOf()", function() {
        it("should return -1 when the value is not present", function() {
            assert.equal([1,2,3].indexOf(4), -1)
        });
    });
});
