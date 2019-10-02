class student extends person {
    protected _job: string;
    constructor(name : string, age : number, job : string){
        super(name, age);
        this._job = job;
    }
    goToClasses() {
        let say: String = 'I’m going to class.';
        console.log(say);
    }
    showAge() {
       n: Number;
        let n:number = this._age;
        var say: (x: number) => string = function(x) { 
            return `My age is: ${x} years old`;
        } 
       console.log(say(n));
    }
}
interface student{
    name: string;
    age: number;
    job: string;
}