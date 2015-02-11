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
    GeneratorBase.prototype.getRangeCount = function () {
        return 0;
    };
    GeneratorBase.prototype.getChar = function (index) {
        return "0";
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
        this.minValue = 0;
        this.maxValue = 2;
    }
    IntGenerator.prototype.generate = function () {
        return Math.floor(Math.random() * (this.maxValue - this.minValue)) + this.minValue;
    };
    return IntGenerator;
})(GeneratorBase);
var FloatGenerator = (function (_super) {
    __extends(FloatGenerator, _super);
    function FloatGenerator() {
        _super.apply(this, arguments);
        this.minValue = 0;
        this.maxValue = 1;
    }
    FloatGenerator.prototype.generate = function () {
        return Math.random() * (this.maxValue - this.minValue);
    };
    return FloatGenerator;
})(GeneratorBase);
var NumberCharGenerator = (function (_super) {
    __extends(NumberCharGenerator, _super);
    function NumberCharGenerator() {
        _super.apply(this, arguments);
    }
    NumberCharGenerator.prototype.generate = function () {
        return Math.floor(Math.random() * 10).toString();
    };
    NumberCharGenerator.prototype.getRangeCount = function () {
        return 10;
    };
    NumberCharGenerator.prototype.getChar = function (index) {
        return index.toString();
    };
    return NumberCharGenerator;
})(GeneratorBase);
var SpecialCharGenerator = (function (_super) {
    __extends(SpecialCharGenerator, _super);
    function SpecialCharGenerator() {
        _super.apply(this, arguments);
        this.specialChars = "!#$%@";
    }
    SpecialCharGenerator.prototype.generate = function () {
        var index = Math.floor(Math.random() * this.specialChars.length);
        return this.specialChars[index];
    };
    SpecialCharGenerator.prototype.getRangeCount = function () {
        return this.specialChars.length;
    };
    SpecialCharGenerator.prototype.getChar = function (index) {
        return this.specialChars[index];
    };
    return SpecialCharGenerator;
})(GeneratorBase);
var EnglishUpperCaseCharGenerator = (function (_super) {
    __extends(EnglishUpperCaseCharGenerator, _super);
    function EnglishUpperCaseCharGenerator() {
        _super.apply(this, arguments);
        this.englishUpperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    EnglishUpperCaseCharGenerator.prototype.generate = function () {
        var index = Math.floor(Math.random() * this.englishUpperCaseChars.length);
        return this.englishUpperCaseChars[index];
    };
    EnglishUpperCaseCharGenerator.prototype.getRangeCount = function () {
        return 26;
    };
    EnglishUpperCaseCharGenerator.prototype.getChar = function (index) {
        return this.englishUpperCaseChars[index];
    };
    return EnglishUpperCaseCharGenerator;
})(GeneratorBase);
var EnglishLowerCaseCharGenerator = (function (_super) {
    __extends(EnglishLowerCaseCharGenerator, _super);
    function EnglishLowerCaseCharGenerator() {
        _super.apply(this, arguments);
        this.englishLowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    }
    EnglishLowerCaseCharGenerator.prototype.generate = function () {
        var index = Math.floor(Math.random() * this.englishLowerCaseChars.length);
        return this.englishLowerCaseChars[index];
    };
    EnglishLowerCaseCharGenerator.prototype.getRangeCount = function () {
        return 26;
    };
    EnglishLowerCaseCharGenerator.prototype.getChar = function (index) {
        return this.englishLowerCaseChars[index];
    };
    return EnglishLowerCaseCharGenerator;
})(GeneratorBase);
var MixCharGenerator = (function (_super) {
    __extends(MixCharGenerator, _super);
    function MixCharGenerator() {
        _super.apply(this, arguments);
        this.generators = [];
        this.mixStrategy = 0 /* Char */;
    }
    MixCharGenerator.prototype.generate = function () {
        if (this.mixStrategy == 0 /* Char */) {
            var sum = 0;
            for (var i = 0; i < this.generators.length; i++) {
                sum += this.generators[i].getRangeCount();
            }
            var index = Math.floor(Math.random() * sum);
            for (var j = 0; j < this.generators.length; j++) {
                var generator = this.generators[j];
                if (index < generator.getRangeCount()) {
                    return generator.getChar(index);
                }
                index -= generator.getRangeCount();
            }
            throw "index overflow";
        }
        else {
            var index = Math.floor(Math.random() * this.generators.length);
            return this.generators[index].generate();
        }
    };
    return MixCharGenerator;
})(GeneratorBase);
var MixStrategy;
(function (MixStrategy) {
    MixStrategy[MixStrategy["Char"] = 0] = "Char";
    MixStrategy[MixStrategy["Element"] = 1] = "Element";
})(MixStrategy || (MixStrategy = {}));
var PhoneNumberGenerator = (function (_super) {
    __extends(PhoneNumberGenerator, _super);
    function PhoneNumberGenerator() {
        _super.apply(this, arguments);
        this.minLength = 8;
        this.maxLength = 12;
    }
    PhoneNumberGenerator.prototype.generate = function () {
        var result = "";
        var generator = new NumberCharGenerator();
        var numbers = generator.generateMuch(this.minLength, this.maxLength);
        for (var i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }
        return result;
    };
    return PhoneNumberGenerator;
})(GeneratorBase);
var PasswordGenerator = (function (_super) {
    __extends(PasswordGenerator, _super);
    function PasswordGenerator() {
        _super.apply(this, arguments);
        this.number = 16;
    }
    PasswordGenerator.prototype.generate = function () {
        if (this.number < 4) {
            this.number = 16;
        }
        var list = [];
        var specialCharGenerator = new SpecialCharGenerator();
        var numberCharGenerator = new NumberCharGenerator();
        var englishUpperCaseCharGenerator = new EnglishUpperCaseCharGenerator();
        var englishLowerCaseCharGenerator = new EnglishLowerCaseCharGenerator();
        var mixCharGenerator = new MixCharGenerator();
        mixCharGenerator.generators.push(specialCharGenerator);
        mixCharGenerator.generators.push(numberCharGenerator);
        mixCharGenerator.generators.push(englishUpperCaseCharGenerator);
        mixCharGenerator.generators.push(englishLowerCaseCharGenerator);
        list.push(specialCharGenerator.generate());
        list.push(numberCharGenerator.generate());
        list.push(englishUpperCaseCharGenerator.generate());
        list.push(englishLowerCaseCharGenerator.generate());
        var tmp = mixCharGenerator.generateMany(this.number - 4);
        for (var j = 0; j < tmp.length; j++) {
            list.push(tmp[j]);
        }
        var result = "";
        for (var i = list.length; i > 0; i--) {
            var index = Math.floor(Math.random() * list.length);
            result += list[index];
            list.splice(index, 1);
        }
        return result;
    };
    return PasswordGenerator;
})(GeneratorBase);
module.exports.boolGenerator = new BoolGenerator();
module.exports.dateGenerator = new DateGenerator();
module.exports.intGenerator = new IntGenerator();
module.exports.floatGenerator = new FloatGenerator();
module.exports.numberCharGenerator = new NumberCharGenerator();
module.exports.specialCharGenerator = new SpecialCharGenerator();
module.exports.englishUpperCaseCharGenerator = new EnglishUpperCaseCharGenerator();
module.exports.englishLowerCaseCharGenerator = new EnglishLowerCaseCharGenerator();
module.exports.mixCharGenerator = new MixCharGenerator();
module.exports.phoneNumberGenerator = new PhoneNumberGenerator();
module.exports.passwordGenerator = new PasswordGenerator();
//# sourceMappingURL=Generator.js.map