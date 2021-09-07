
//1. Literals and properties

const obj1 = {}; // 오브젝트 만드는 법 1 : object literal
const obj2 = new Object(); // 오브젝트 만드는 법 2 : new를 이용해 class로 만듦 : object constructor

print(name, age) 
function print(person) { // 인자를 따로 받지않고 person으로 한 번에 받을 수 있음
    console.log(person.name);
    console.log(person.age); 
}

const ellie = { name: 'ellie', age: 4 }; // 이렇게 object로 관리하면 name, age를 따로 안 받아도 됨
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

//2. Computed properties
//key should be always string
console.log(ellie.name); // object의 데이터를 접근할 땐 .을 이용해 접근했지만
console.log(elle['name']) // 괄호를 이용해 object안에 변수를 string 형태로 접근할 수 있음

//3. Property value short hand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);
console.log(person4);

function makePerson(name, age) {
    return {
        name,
        age,
    }; // name, age가 동일하므로 생략 가능
}

//4. Constructor Function
console.log(person4);
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//5. in operator: property existence check(key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random); // 존재하지 않으므로 false 출력

//6. for..in vs for..of
// for (key in obj)
console.clear() // 이전것들이 다 지워짐
for (key in ellie) {
    console.log(key); // ellie 안에 있는 모든 key 출력
}

//for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user); // user의 name도 coder로 할당됨

//old way
const user3 = {};
for (key in user) {
    user3(key) = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

