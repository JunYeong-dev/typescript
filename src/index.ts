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
/*
name, age, gender? <- 매개변수에 ?를 붙여 매개변수를 옵션화할 수 있음
sayHello(name, age); <- 실행하게 되면 Hello Judy, you are 18,ya are a undefined 가 출력됨

매개변수의 type와 리턴 type을 정해줄 수 있다
*/
const sayHello = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

console.log(sayHello(person));

export{};