import { iToDo } from './iToDo';
import { ToDo } from '../to-do';

export interface Userable {
    _id?: any;
    _name: string;
    _password: string;
    _email: string;
    _surname: string;
    _todos: iToDo[];
}
