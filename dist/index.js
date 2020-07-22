"use strict";
/*
interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    name: "Judy",
    age: 18,
    gender: "female"
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
// interface는 ts -> js 로 변환시 js에 컴파일 되지 않지만, class는 컴파일 됨
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const judy = new Human("Judy", 18, "female");
/*
name, age, gender? <- 매개변수에 ?를 붙여 매개변수를 옵션화할 수 있음
sayHello(name, age); <- 실행하게 되면 Hello Judy, you are 18,ya are a undefined 가 출력됨

매개변수의 type와 리턴 type을 정해줄 수 있다
*/
const sayHello = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayHello(judy));
//# sourceMappingURL=index.js.map