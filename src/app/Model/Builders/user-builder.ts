import { iToDo } from './../interfaces/iToDo';
import { User } from '../user';

export class UserBuilder {
    private _userId: string;
    private _name: string;
    private _surname: string;
    private _password: string;
    private _email: string;
    private _toDos: iToDo[];

    constructor() {}

    public restart(): UserBuilder {
        this._name = '';
        this._password = '';
        this._email = '';
        this._toDos = [];
        this._surname = '';
        return this;
    }

    public build(): User {
        return new User(this._userId, this._name, this._password, this._email, this._toDos, this._surname);
    }

    public surname(surname: string) {
        this._surname = surname;
        return this;
    }

    public name(name: string): UserBuilder {
        this._name = name;
        return this;
    }

    public password(password: string): UserBuilder {
        this._password = password;
        return this;
    }

    public email(email: string): UserBuilder {
        this._email = email;
        return this;
    }

    public toDos(toDos: iToDo[]): UserBuilder {
        this._toDos = toDos;
        return this;
    }

    public userId(uid: string): UserBuilder {
        this._userId = uid;
        return this;
    }

}
