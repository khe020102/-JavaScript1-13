'use strict';

class Person { // 사람이라는 class를 만들고
    constructor(name, age) { // 생성자를 이용해 나중에 object를 만들 때 필요한 데이터를 전달
        this.name = name;
        this.age = age;
    }
    
    
    speak() {
        console.log(`${this.name}: hello!`);
    }   
}

const ellie = new Person('ellie', 20); // 새로운 오브젝트를 만들기 위해 new 사용
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
     }

     get age() { // get이라는 키워드를 이용해 값을 return
            return this._age; // this.age를 this._age로 변경
     }

     set age(value) { // set이라는 키워드를 이용해 값을 설정할 수 있음(값을 설정하므로 value를 받아와야 함)
        // if (value < 0) {
        //    throw Error('age can not be negative');
        // }    
        
        this._age = value < 0 ? 0 : value; // value가 값이 -라면 0을 쓰고 아니면 value를 쓰겠다
     }
}

const user1 = new User('Steve', 'Job', -1); // 사용자가 실수로 나이를 -1로 지정하면
console.log(user1.age); // 그대로 -1 출력되는데 이를 막아주는 것이 Getter and setters

// 3. Fields (public, private)
// Too soon!

class Experiment {
    publicField = 2;
    #privateField = 0; // 클래스 내부에서만 값이 보여지고 접근되고 변경 가능함
}
const experiment = new Experiment(); 
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!

class Article {
    static publisher = 'Dream Coding'; // object에 상관없이 class 자체에 연결됨
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2); // article 1, 2라는 object를 만듦
console.log(Article.publisher); // object가 아닌 class를 이용해 publisher 출력

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    } // shape이라는 class 안에 3가지의 fields,

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height; // 2가지의 methods가 존재
    }
}

class Rectangle extends Shape { // 동일하게 반복할 필요없이 extends라는 키워드를 이용해 shape을 연장해 shape에 있던 Fields, Methods가 자동적으로 포함됨
}
class Triangle extends Shape {
    draw() {
        super.draw(); // 재정의한 함수 뿐만 아니라 공통적으로 정의한 함수를 이용하기 위해 호출
        console.log('삼각형');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceof

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);


