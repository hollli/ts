class User {
    name: string;

    constructor(_name: string) {

        this.name = _name;
    }
}

const tom: User = new User("Том");
var x = "hello";
console.log(x);
var f = "work";
console.log(f);
let decimal: number = 6;
// шестнадцатиричная система
let hex: number = 0xf00d;       // 61453 в десятичной
// двоичная система
let binary: number = 0b1010;    // 10 в десятичной
// восьмиричная система
let octal: number = 0o744;      // 484 в десятичной
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
let someVar: any = "hello";
console.log(someVar);   // сейчас someVar - это string
someVar = 20;
console.log(someVar);
let sum: any;
sum = 1200;

if (typeof sum === "number") {

    let result: number = sum / 12;
    console.log(result);
} else {
    console.log("invalid operation");
}

function add(a, b) {
    return a + b;
}

// использование функции
let result1 = add(1, 2); // результат 3
let result2 = add("1", "2"); // результат 12
function getName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let name1 = getName("Иван", "Кузнецов");
console.log(name1); // Иван Кузнецов
let name2 = getName("Вася");
console.log(name2); // Вася
function defaultLastName(): string {
    return "Smith";
}

function multiply(a: number, b: number): number {
    return a * b;
};

function mathOp1(x: number, y: number, operation: (a: number, b: number) => number): number {

    let result = operation(x, y);
    return result;
}

console.log(mathOp1(10, 20, (x, y) => x + y)); // 30
console.log(mathOp1(10, 20, (x, y) => x * y)); // 200
function printId(id: number | string) {
    console.log(`Id: ${id}`);
}

let id: string | number = "ruy74";

printId("1h2e3l4o5");
printId(9876);
printId(id);

function printSentence(words: string[] | string) {
    // если words - строка
    if (typeof words === "string") {
        console.log(words);
    } else {
        // Если words - массив string[]
        console.log(words.join(" "));
    }
}

printSentence(["Язык", "программирования", "TypeScript"]);
printSentence("Язык программирования JavaScript");

let x2: number = undefined;
console.log(x2);
x2 = null;
console.log(x2);
x2 = 5;
console.log(x2);
let userId: number | null = null;

function printId1(id: number | null) {
    if (id === null) {
        console.log("пользователь отсутствует");
    } else {
        console.log(`id пользователя: ${id}`);
    }
}

printId1(userId)     // пользователь отсутствует
userId = 45;
printId1(userId);    // id пользователя: 45

const header1: HTMLElement | null = document.getElementById("header");
header1!.innerText = "Hello Typescript!";
let person: { name: string; age?: number }; // Свойство age - необязательное

person = {name: "Tom", age: 23};
console.log(person.name);   // Tom
person = {name: "Bob"};    // Норм, свойство age - необязательное
console.log(person.name);   // Bob

let tom1: { name: string; age?: number } = {name: "Tom", age: 23};
let bob: { name: string; age?: number } = {name: "Bob"};


function printUser(user: { name: string; age?: number }) {

    if ("age" in user) {
        console.log(`Name: ${user.name} Age: ${user.age}`);
    } else {
        console.log(`Name: ${user.name}`);
    }
}

printUser(tom1);
printUser(bob);

function Pers() {
    type Person = { name: string; age: number };

    let tom: Person = {name: "Tom", age: 36};
    let bob: Person = {name: "Bob", age: 41};

    function printPerson(user: Person) {
        console.log(`Name: ${user.name}  Age: ${user.age}`);
    }

    printPerson(tom);
    printPerson(bob);
}

Pers();

function Pers2() {
    function printUsers(users: readonly string[]) {
        for (const user of users) {
            console.log(user);
        }
    }

    function usersToString(users: ReadonlyArray<string>): String {

        return users.join(", ");
    }

    const people: readonly string[] = ["Tom", "Bob", "Sam"];

    printUsers(people);
    console.log(usersToString(people));

}

Pers2();

const people: string[] = ["Tom", "Bob", "Sam"];

const [first, second, third] = people;
console.log(first);     // Tom
console.log(second);    // Bob
console.log(third);     // Sam
function ss() {
    function printUser(user: [string, number, boolean?]) {

        if (user[2] !== undefined) {
            console.log(`name: ${user[0]}  age: ${user[1]}  isMarried: ${user[2]}`);
        } else {
            console.log(`name: ${user[0]}  age: ${user[1]}`);
        }
    }

    let bob: [string, number, boolean] = ["Bob", 41, true];
    let tom: [string, number] = ["Tom", 36];

    printUser(bob);
    printUser(tom);
}

ss();

function sum1(a: number, b: number, c?: number): number {

    let result = a + b;
    if (c !== undefined) {
        result += c;
    }
    return result;
}

const numbers1 = [1, 3] as const;
let num1 = sum1(...numbers1);    // a = 1  b = 3
console.log(num1); // 4

const numbers2 = [1, 3, 7] as const;
let num2 = sum1(...numbers2);    // a = 1  b = 3  c = 7
console.log(num2); // 11
enum Season {
    Winter = "Зима",
    Spring = "Весна",
    Summer = "Лето",
    Autumn = "Осень"
};
var current: Season = Season.Summer;
console.log(current);   // Лето
enum DayTime {
    Morning,
    Evening
};

function welcome(dayTime: DayTime) {

    if (dayTime === DayTime.Morning) {
        console.log("Доброе утро");
    } else {
        console.log("Добрый вечер");
    }
}

let current2: DayTime = DayTime.Morning;
welcome(current2);           // Доброе утро
welcome(DayTime.Evening);   // Добрый вечер
function sss() {
    class User1 {

        name: string;
        age: number;

        print() {
            console.log(`name: ${this.name}  age: ${this.age}`);
        }

        toString(): string {
            return `${this.name}: ${this.age}`;
        }
    }

    let tom = new User1();
    tom.name = "Tom";
    tom.age = 36;
    tom.print();                    // name: Tom  age: 36

    console.log(tom.toString());    // Tom: 36
}

sss();

function ss1s() {
    class User {

        name: string;
        age: number;

        constructor(userName: string, userAge: number) {

            this.name = userName;
            this.age = userAge;
        }

        print() {
            console.log(`name: ${this.name}  age: ${this.age}`);
        }
    }

    let tom = new User("Tom", 36);
    tom.print();        // name: Tom  age: 36
}

ss1s();

function l3() {
    class Person {

        name: string;

        constructor(userName: string) {

            this.name = userName;
        }

        print(): void {
            console.log(`Имя: ${this.name}`);
        }
    }

    class Employee extends Person {

        company: string;

        work(): void {
            console.log(`${this.name} работает в компании ${this.company}`);
        }
    }

    class Person1 {

        name: string;

        constructor(userName: string) {

            this.name = userName;
        }

        print(): void {
            console.log(`Имя: ${this.name}`);
        }
    }

    class Employee1 extends Person1 {

        company: string;

        work(): void {
            console.log(`${this.name} работает в компании ${this.company}`);
        }
    }

    let bob: Employee1 = new Employee1("Bob");
    bob.print();
    bob.company = "Microsoft";
    bob.work();
}

l3();

abstract class Figure {
    abstract x: number;
    abstract y: number;

    abstract getArea(): void;
}

class Rectangle extends Figure {
    //x: number;
    //y: number;

    constructor(public x: number, public y: number, public width: number, public height: number) {
        super();
    }

    getArea(): void {
        let square = this.width * this.height;
        console.log("area =", square);
    }
}

let someFigure: Figure = new Rectangle(10, 10, 20, 25)
someFigure.getArea();

class Person {
    protected name: string;
    private year: number;

    constructor(name: string, age: number) {

        this.name = name;
        this.year = this.setYear(age);
    }

    protected printPerson(): void {

        console.log(`Имя: ${this.name}  Год рождения: ${this.year}`);
    }

    private setYear(age: number): number {

        return new Date().getFullYear() - age;
    }
}

class Employee extends Person {

    protected company: string;

    constructor(name: string, age: number, company: string) {
        super(name, age);
        this.company = company;
    }

    public printEmployee(): void {
        //console.log("Year: " + this.year);    // поле year недоступно, так как private
        // setYear(25);                         // метод setYear недоступен, так как private
        this.printPerson();                     // метод printPerson доступен, так как protected
        console.log(`Компания: ${this.company}`);
    }
}

let sam = new Employee("Sam", 31, "Microsoft");
sam.printEmployee();

function hah() {
    class Person {
        name: string;
        private _age: number;
        private _name: string;

        public get age(): number {
            return this._age;
        }

        public set age(n: number) {
            if (n < 0 || n > 110) {
                console.log("Недопустимый возраст!");
            } else {
                this._age = n;
            }
        }
    }

    let tom = new Person();
    tom.name = "Tom";
    tom.age = 36;
    console.log(tom.age);   // 36
    tom.age = -1243;        // Недопустимый возраст!
    console.log(tom.age);   // 36
}

hah();

function l33() {
    class Person {

        age: number;
        name: string;

        static retirementAge: number = 65;

        static calculateYears(age: number): number {

            return Person.retirementAge - age;
        }

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    class Employee extends Person {
    }

    let years = Employee.calculateYears(36);
    console.log(Employee.retirementAge);
}

l33();

function l333() {
    interface IUser {
        id: number;
        name: string;

        getFullName(surname: string): string;
    }

    class User implements IUser {

        id: number;
        name: string;
        age: number;

        constructor(userId: number, userName: string, userAge: number) {

            this.id = userId;
            this.name = userName;
            this.age = userAge;
        }

        getFullName(surname: string): string {

            return this.name + " " + surname;
        }
    }

    let tom = new User(1, "Tom", 23);
    console.log(tom.getFullName("Simpson"));
}

l333();

interface IMovable {

    speed: number;

    move(): void;
}

interface ICar extends IMovable {

    fill(): void;
}

class Car implements ICar {

    speed: number;

    move(): void {

        console.log("Машина едет со скоростью " + this.speed + " км/ч");
    }

    fill(): void {

        console.log("Заправляем машину топливом");
    }
}

let auto = new Car();
auto.speed = 60;
auto.fill();
auto.move();

function f1() {
    interface PersonInfo {
        (name: string, surname: string): void;

        fullName: string;
        password: string;

        authenticate(): void;
    }

    function personBuilder(): PersonInfo {

        let person = <PersonInfo>function (name: string, surname: string): void {
            person.fullName = name + " " + surname;
        };
        person.authenticate = function () {
            console.log(person.fullName + " входит в систему с паролем " + person.password);
        };
        return person;
    }

    let tom = personBuilder();
    tom("Tom", "Simpson");
    tom.password = "qwerty";
    tom.authenticate();
}

f1();
//
// function f2() {
//     namespace Personnel {
//
//         export interface IUser {
//             displayInfo(): void;
//         }
//
//         export class Employee {
//             constructor(public name: string) {
//             }
//         }
//
//         export function work(emp: Employee): void {
//             console.log(emp.name, "is working");
//         }
//
//         export let defaultUser = {name: "Kate"}
//
//         export let value = "Hello";
//     }
//
//     let tom = new Personnel.Employee("Tom")
//     Personnel.work(tom);                    // Tom is working
//
//     console.log(Personnel.defaultUser.name);    // Kate
//     console.log(Personnel.value);    // Hello
// }
// f2();
namespace Personnel {
    export class Employee {

        constructor(public name: string){
        }
    }
}

let alice = new Personnel.Employee("Alice");
console.log(alice.name);    // Alice

