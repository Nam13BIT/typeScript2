class teacher extends student {
    private _subject: string; 
    constructor(Name : string, Age : number, Job : string, Subject: string){
        super(Name, Age, Job);
        this._subject = Subject;
    }
    sayExplain() {
        let say: String = 'Explanation begins';
        console.log(say);
    }
}
interface teacher{
    name: string;
    age: number;
    job: string;
    subject: string;
}