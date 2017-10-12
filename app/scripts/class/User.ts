class User {

    private _id;
    private _pseudo;
    private _lastname;
    private _firstname;
    private _email;

    public constructor(id:number,pseudo:string,firstname: string, lastname: string,email:string) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._pseudo =pseudo;
        this._email=email;
    }
    public getId(){
        return this._id;
    }
    public getEmail(){
        return this._email;
    }
    public getFirstName(){
        return this._firstname;
    }

    public getLastName(){
        return this._lastname;
    }

    public getPseudo(){
        return this._pseudo;
    }


}
