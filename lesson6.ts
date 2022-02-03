class User {
    name: string;
    age: number;
    gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const user = new User('Max', 18, 'male')

const sum = (a:number,b:number) => {
  return a + b
}

const showSum = (a:number,b:number)=>{
    console.log(a + b);
}

const incAge = (someUser:object,inc:number)=>{
    someUser['age'] += inc
    return someUser
}

console.log(sum(10,10))
showSum(10,10)
console.log(incAge(user,10));



