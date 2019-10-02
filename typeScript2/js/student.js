class student extends person {
    constructor(name, age, job) {
        super(name, age);
        this._job = job;
    }
    goToClasses() {
        let say = 'I’m going to class.';
        console.log(say);
    }
    showAge() {
        n: Number;
        let n = this._age;
        var say = function (x) {
            return `My age is: ${x} years old`;
        };
        console.log(say(n));
    }
}
