class StudentAndTeacherTest extends teacher {
    constructor(Name, Age, Job, Subject) {
        super(Name, Age, Job, Subject);
    }
}
//Create a Person and make it say hello
var firstPerson = new person('Nam', 24);
firstPerson.sayHello();
//Create a student, set his age to 21, tell him to Greet and display his age
var secondPerson = new student('Nam', 21, 'student');
secondPerson.goToClasses();
secondPerson.showAge();
secondPerson.sayHello();
//Create a teacher, 30 years old, ask him to say hello and then explain.
var thirdPerson = new teacher('Nam', 30, 'teacher', 'math');
thirdPerson.sayExplain();
thirdPerson.sayHello();
