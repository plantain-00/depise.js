/**
 * Created by yaoyao on 15/2/10.
 */
var assert = require("assert");
var generator = require("./Generator.js");

describe('despise.js', function () {
    describe('#BoolGenerator()', function () {
        it('should pass', function () {
            var result = generator.boolGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#DateGenerator()', function () {
        it('should pass', function () {
            var result = generator.dateGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#IntGenerator()', function () {
        it('should pass', function () {
            generator.intGenerator.minValue = 0;
            generator.intGenerator.maxValue = 100;
            var result = generator.intGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
});