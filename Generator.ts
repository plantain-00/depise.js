/**
 * Created by yaoyao on 15/2/10.
 */
class GeneratorBase<T> {
    generate():T {
        throw new Error('This method is abstract');
    }

    generateMany(number:number):T[] {
        var result = [];
        for (var i = 0; i < number; i++) {
            result.push(this.generate());
        }
        return result;
    }

    generateMuch(from:number, to:number):T[] {
        var number = Math.random() * (to - from) + from;
        return this.generateMany(number);
    }

    getRangeCount():number {
        return 0;
    }

    getChar(index:number) {
        return "0";
    }
}

class BoolGenerator extends GeneratorBase<Boolean> {
    generate():Boolean {
        return Math.random() > 0.5;
    }
}

class DateGenerator extends GeneratorBase<Date> {
    generate():Date {
        var totalMiliseconds:number = Math.random() * (new Date().getTime());
        var d = new Date();
        d.setTime(totalMiliseconds);
        return d;
    }
}

class IntGenerator extends GeneratorBase<number> {
    minValue:number = 0;
    maxValue:number = 2;

    generate():number {
        return Math.floor(Math.random() * (this.maxValue - this.minValue)) + this.minValue;
    }
}

class FloatGenerator extends GeneratorBase<number> {
    minValue:number = 0;
    maxValue:number = 1;

    generate():number {
        return Math.random() * (this.maxValue - this.minValue);
    }
}

class NumberCharGenerator extends GeneratorBase<string> {
    generate():string {
        return Math.floor(Math.random() * 10).toString();
    }

    getRangeCount():number {
        return 10;
    }

    getChar(index:number) {
        return index.toString();
    }
}

class SpecialCharGenerator extends GeneratorBase<string> {
    specialChars:String = "!#$%@";

    generate():string {
        var index = Math.floor(Math.random() * this.specialChars.length);
        return this.specialChars[index];
    }

    getRangeCount():number {
        return this.specialChars.length;
    }

    getChar(index:number) {
        return this.specialChars[index];
    }
}

class EnglishUpperCaseCharGenerator extends GeneratorBase<string> {
    englishUpperCaseChars:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    generate():string {
        var index = Math.floor(Math.random() * this.englishUpperCaseChars.length);
        return this.englishUpperCaseChars[index];
    }

    getRangeCount():number {
        return 26;
    }

    getChar(index:number) {
        return this.englishUpperCaseChars[index];
    }
}

class EnglishLowerCaseCharGenerator extends GeneratorBase<string> {
    englishLowerCaseChars:string = "abcdefghijklmnopqrstuvwxyz";

    generate():string {
        var index = Math.floor(Math.random() * this.englishLowerCaseChars.length);
        return this.englishLowerCaseChars[index];
    }

    getRangeCount():number {
        return 26;
    }

    getChar(index:number) {
        return this.englishLowerCaseChars[index];
    }
}

class MixCharGenerator extends GeneratorBase<string> {
    generators:GeneratorBase<string>[] = [];
    mixStrategy:MixStrategy = MixStrategy.Char;

    generate():string {
        if (this.mixStrategy == MixStrategy.Char) {
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
        } else {
            var index = Math.floor(Math.random() * this.generators.length);
            return this.generators[index].generate();
        }
    }
}


enum MixStrategy{
    Char,
    Element
}


class PhoneNumberGenerator extends GeneratorBase<string> {
    minLength:number = 8;
    maxLength:number = 12;

    generate():string {
        var result = "";
        var generator = new NumberCharGenerator();
        var numbers = generator.generateMuch(this.minLength, this.maxLength);
        for (var i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }
        return result;
    }
}

class PasswordGenerator extends GeneratorBase<string> {
    number:number = 16;

    generate():string {
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
    }
}

declare var module:any;
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