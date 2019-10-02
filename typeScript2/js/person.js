class person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    sayHello() {
        let say = 'Hello';
        console.log(say);
    }
    setAge(n) {
        this._age = n;
    }
}
