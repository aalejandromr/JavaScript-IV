// CODE here for your Lambda Classes

class People {
    constructor(attributes){
        this.name = attributes.name;
        this.location = attributes.location;
        this.age = attributes.age;
    }

    speak(){
        return `Hello, my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends People {
    constructor(attributes){
        super(attributes);
        this.speciality = attributes.speciality;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subjct){
        return `Today we are learning about ${subjct}`
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }

    grade_randomly(student){
        let before = student.grade;
        student.grade -= Math.floor(Math.random() * (before - 1) + 1);
        let after = student.grade;
        return `${student.name} had ${before}, and now has ${after}`;
    }
}

class Student extends People {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = Math.floor(Math.random() * (100 - 1) + 1);
    }

    listsSubjects(){
        this.favSubjects.map( subject => console.log(subject))
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR sor ${subject}`
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }

    graduate(){
        return this.grade >= 70 ? `${this.name} you just GRADUATED!` : `${this.name} you are this (${70 - this.grade} points) far away, keep going!`
    }
}

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}


const Dan = new Instructor({
    name: 'Dan',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Cats Cats Cats`
  })

const Josh = new ProjectManager({
    name: 'Josh',
    location: 'Arizona',
    age: 28,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `We got this`
});

const Alejandro = new Student({
    name: 'Alejandro',
    location: 'FL',
    age: 21,
    favSubjects: ['Classes', 'Networking', 'Money'],
    className: "WEB20"
})

// Instructor Tests

console.log(Dan.demo('Classes'))
console.log(Dan.grade(Alejandro, 'Javascript'));

// Student Tests
console.log(Alejandro);
Alejandro.listsSubjects();
console.log(Alejandro.PRAssignment("Javascript IV"));
console.log(Alejandro.sprintChallenge("Javascript Fundamentals"))
console.log(Dan.grade_randomly(Alejandro));
console.log(Alejandro.graduate())