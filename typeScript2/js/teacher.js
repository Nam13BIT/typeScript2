class teacher extends student {
    constructor(Name, Age, Job, Subject) {
        super(Name, Age, Job);
        this._subject = Subject;
    }
    sayExplain() {
        let say = 'Explanation begins';
        console.log(say);
    }
}
