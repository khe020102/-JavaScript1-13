'use strict'; 

let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

{
    age = 4;
    var age;
}
console.log(age);

const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

const canRead = true; //true라고 바로 값을 할당할 수 있음
const test = 3 < 1; //3이 1보다 작다는 것은 false이므로 false로 할당됨
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

let x;
console.log(`value: ${x}, type: ${typeof x}`);

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);


console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);