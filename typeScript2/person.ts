class person {
    public _name: string;
    protected _age: number;
    constructor (name : string, age : number){
        this._name = name;
        this._age = age;
    }
    sayHello() {
        let say: string = 'Hello';
        console.log(say);
    }
    setAge(n: number) {
        this._age = n;
    }
}