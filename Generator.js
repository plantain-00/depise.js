var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by yaoyao on 15/2/10.
 */
var GeneratorBase = (function () {
    function GeneratorBase() {
    }
    GeneratorBase.prototype.generate = function () {
        throw new Error('This method is abstract');
    };
    GeneratorBase.prototype.generateMany = function (number) {
        var result = [];
        for (var i = 0; i < number; i++) {
            result.push(this.generate());
        }
        return result;
    };
    GeneratorBase.prototype.generateMuch = function (from, to) {
        var number = Math.random() * (to - from) + from;
        return this.generateMany(number);
    };
    return GeneratorBase;
})();
var BoolGenerator = (function (_super) {
    __extends(BoolGenerator, _super);
    function BoolGenerator() {
        _super.apply(this, arguments);
    }
    BoolGenerator.prototype.generate = function () {
        return Math.random() > 0.5;
    };
    return BoolGenerator;
})(GeneratorBase);
var DateGenerator = (function (_super) {
    __extends(DateGenerator, _super);
    function DateGenerator() {
        _super.apply(this, arguments);
    }
    DateGenerator.prototype.generate = function () {
        var totalMiliseconds = Math.random() * (new Date().getTime());
        var d = new Date();
        d.setTime(totalMiliseconds);
        return d;
    };
    return DateGenerator;
})(GeneratorBase);
var IntGenerator = (function (_super) {
    __extends(IntGenerator, _super);
    function IntGenerator() {
        _super.apply(this, arguments);
    }
    IntGenerator.prototype.generate = function () {
        return Math.floor(Math.random() * (this.maxValue - this.minValue)) + this.minValue;
    };
    return IntGenerator;
})(GeneratorBase);
module.exports.boolGenerator = new BoolGenerator();
module.exports.dateGenerator = new DateGenerator();
module.exports.intGenerator = new IntGenerator();
//# sourceMappingURL=Generator.js.map