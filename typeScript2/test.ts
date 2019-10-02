class StudentAndTeacherTest extends teacher{
    constructor(Name : string, Age : number, Job : string, Subject: string){
        super(Name, Age, Job, Subject);
    }
    // Test(){
    //     if(this._job == "student" ){
    //         console.log(this.goToClasses());
    //         console.log(this.showAge());
    //     }
    //     else{
    //         console.log(this.sayExplain());
    //     }
    // }
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