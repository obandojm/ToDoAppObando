import { iToDo } from './interfaces/iToDo';
import { Userable } from './interfaces/userable';

export class User implements Userable {
    public _id: string;
    public _name: string;
    public _password: string;
	public _email: string;
	public _todos: iToDo[];
	public _surname: string;

    constructor(id: string, name: string, password: string, email: string, toDos: iToDo[], surname: string) {
        this._id = id;
        this._name = name;
        this._password = password;
		this._email = email;
		this._todos = toDos;
		this._surname = surname;
    }

	public get id(): string {
		return this._id;
    }
    
	public get name(): string {
		return this._name;
	}

	public get password(): string {
		return this._password;
	}

	public get email(): string {
		return this._email;
	}

	public set id(value: string) {
		this._id = value;
	}

	public set name(value: string) {
		this._name = value;
	}

	public set password(value: string) {
		this._password = value;
	}

	public set email(value: string) {
		this._email = value;
	}

}
