class Person {
    constructor (name = 'anonynous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreetings () {
        return `Hi my name is ${this.name}`;
    }
    getDescription () {
        return `Hi i am  ${this.name} is ${this.age} year(s) old`;
    }
}

class Student extends Person {
    constructor(name, age,major){
       super(name,age)
       this.major = major;
    }
    // this method was not really needed
    hasMajor(){
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.major){
            description += `His major is ${this.major}.`
        }
        return description;
    }
}

const firstPerson = new Student("ken joan",29,'maths')
firstPerson.getDescription();

const secondPerson = new Student();
secondPerson.getDescription(); 



class Traveler extends Person {
    constructor(name,age,homeLocation){
       super(name,age)
       this.homeLocation = homeLocation;
    }
    hasHomeLocation () {
        return !!this.homeLocation
    }
    getGreetings () {
        let greeting = super.getGreetings()
        if(this.homeLocation){
            greeting += ` I'm visting from ${this.homeLocation}`
        }
        return greeting;
    }
}

const firstPerson = new Traveler("ken joan",29,"lagos")
firstPerson.getGreetings()

const secondPerson = new Traveler(undefined,undefined,'abord');
secondPerson.getGreetings()



