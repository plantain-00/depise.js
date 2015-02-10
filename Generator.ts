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
}

class BoolGenerator extends GeneratorBase<Boolean> {
    generate():Boolean {
        return Math.random() > 0.5;
    }
}

class DateGenerator extends GeneratorBase<Date> {
    generate():Date {
        var totalMiliseconds:number = Math.random() * (new Date().getTime());
        var d:Date;
        d.setTime(totalMiliseconds);
        return d;
    }
}

declare var module:any;
module.exports.BoolGenerator = new BoolGenerator();
module.exports.DateGenerator = new DateGenerator();