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
    describe('#FloatGenerator()', function () {
        it('should pass', function () {
            generator.floatGenerator.minValue = 0;
            generator.floatGenerator.maxValue = 100;
            var result = generator.floatGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });


    describe('#NumberCharGenerator()', function () {
        it('should pass', function () {
            var result = generator.numberCharGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#SpecialCharGenerator()', function () {
        it('should pass', function () {
            var result = generator.specialCharGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#EnglishUpperCaseCharGenerator()', function () {
        it('should pass', function () {
            var result = generator.englishUpperCaseCharGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#EnglishLowerCaseCharGenerator()', function () {
        it('should pass', function () {
            var result = generator.englishLowerCaseCharGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#MixCharGenerator()', function () {
        it('should pass', function () {
            generator.mixCharGenerator.generators.push(generator.specialCharGenerator);
            generator.mixCharGenerator.generators.push(generator.numberCharGenerator);
            generator.mixCharGenerator.generators.push(generator.englishUpperCaseCharGenerator);
            generator.mixCharGenerator.generators.push(generator.englishLowerCaseCharGenerator);
            var result = generator.mixCharGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#ChineseCharGenerator()', function () {
        it('should pass', function () {
            var result = generator.chineseCharGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });


    describe('#PhoneNumberGenerator()', function () {
        it('should pass', function () {
            var result = generator.phoneNumberGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#PasswordGenerator()', function () {
        it('should pass', function () {
            var result = generator.passwordGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#EmailGenerator()', function () {
        it('should pass', function () {
            var result = generator.emailGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#EnglishWordGenerator()', function () {
        it('should pass', function () {
            var result = generator.englishWordGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#EnglishSurnameGenerator()', function () {
        it('should pass', function () {
            var result = generator.englishSurnameGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#EnglishSentenceGenerator()', function () {
        it('should pass', function () {
            var result = generator.englishSentenceGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#EnglishFirstNameGenerator()', function () {
        it('should pass', function () {
            var result = generator.englishFirstNameGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#EnglishNameGenerator()', function () {
        it('should pass', function () {
            var result = generator.englishNameGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#ChineseSurnameGenerator()', function () {
        it('should pass', function () {
            var result = generator.chineseSurnameGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#ChineseNameGenerator()', function () {
        it('should pass', function () {
            var result = generator.chineseNameGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#ChinesePhraseGenerator()', function () {
        it('should pass', function () {
            var result = generator.chinesePhraseGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
    describe('#ChineseSentenceGenerator()', function () {
        it('should pass', function () {
            var result = generator.chineseSentenceGenerator.generateMuch(10, 20);
            for (var i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
        })
    });
});