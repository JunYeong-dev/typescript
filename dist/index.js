"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Judy", age = 18, gender = "female";
/*
name, age, gender? <- 매개변수에 ?를 붙여 매개변수를 옵션화할 수 있음
sayHello(name, age); <- 실행하게 되면 Hello Judy, you are 18,ya are a undefined 가 출력됨

매개변수의 type와 리턴 type을 정해줄 수 있다
*/
const sayHello = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};
sayHello(name, age, gender);
//# sourceMappingURL=index.js.map