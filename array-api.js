//1. make a string out of an Array
{
    const fruits = ['appe', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
}

//2. make an array out of a string
{
    const fruits = 'a, b, c, d';
    const result = fruits.split(',');
    console.log(result);
}

//3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}

//4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
}

//5. find a student with the score 90

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 29, false, 80),
    new Student('C', 29, true, 90),
    new Student('D', 29, false, 66),
    new Student('E', 29, true, 88),
];

{
    const result = students.find(function(student, index) {
        return student.score === 90;
    });
    console.log(result);
}

//6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

//7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = student.map((student) => student.score);
    console.log(result);
}

//8. check if there is a student with the score lower than 50
{
    console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
}

//9. compute students' average score
console.clear();
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result/students.length);
}

//10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
     .map((student) => student.score)
      .filter((score) => score >= 50)
       .join();
    console.log(result);
}