import { iToDo } from './../Model/interfaces/iToDo';
import { ToDo } from './../Model/to-do';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserBuilder } from '../Model/Builders/user-builder';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { User } from '../Model/user';
import { Userable } from '../Model/interfaces/userable';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  public _userActive: User;
  private userBuilder: UserBuilder;
  private userCollection: AngularFirestoreCollection<Userable>;
  private toDos: Observable<iToDo[]>
  public isLogin: boolean;
  

  constructor(private firebaseAuth: AngularFireAuth, private router: Router, private fireStore: AngularFirestore) {
    this.userCollection = this.fireStore.collection<Userable>('users');
    this.userBuilder = new UserBuilder();
    this.isLogin = false;
   }

   public signUp(email: string, password: string, name: string, surname: string): Promise<any>{
      return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((res: any) => {
        const user = this.userBuilder.restart().userId(this.firebaseAuth.auth.currentUser.uid).email(email).name(name).password(password).surname(surname).build();
        this._userActive = user;
        this.userCollection.doc(user.id).set(Object.assign({}, user));
        this.logIn(email, password);
      })
      .catch((error: any) => console.error(error));
   }

   public logIn(email: string, password: string) {
     this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
     .then(async (res: any) => {
       this._userActive = await this.getUser();
       this.loadToDos();
       this.isLogin = true;
       this.router.navigateByUrl("/index");
      })
     .catch((error: any) => console.error(error));
   }

   async getProfile(idUser: string) {
     console.log("estoy en get profile");
		return await new Promise((resolve, reject) => {
			this.fireStore.collection('users').doc(idUser).valueChanges().subscribe((data) => {
				if (!isNullOrUndefined(data)) {
					resolve(data);
				}
			}, reject);
		});
  }

  public async addToDo(mensaje: string) {
    let todo: iToDo = {
      msg: mensaje,
      done: false
    };  
    await this.addToDoFireBase(todo);
    this._userActive._todos.push(todo);
    console.log("dentro del addToDo");
    console.log(this._userActive._todos);
    this.router.navigateByUrl("/index");
  }

  private async addToDoFireBase(todo: iToDo) {
    this.userCollection.doc(this._userActive._id).collection("ToDos").add(Object.assign({}, todo));
    this.loadToDos();
  }
  
  async getUser() {
    var user;
    await this.getProfile(this.firebaseAuth.auth.currentUser.uid).then((data) => {
      user = data
    });
    return user;
  }

  private loadToDos() {
    this.toDos = this.fireStore.collection("users").doc(this._userActive._id).collection("ToDos").snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          data.id = id;
          return { ...data };
         });
    }));
    this.toDos.subscribe(
      (res: any) => this._userActive._todos = res,
      (err: any) => console.log("Error in firebase")
    )
  }

  public markToDoAsDone(todoId: string) {
    this.userCollection.doc(this._userActive._id).collection("ToDos").doc(todoId).update(
      {
        done: true
      }
    );
  }

  public deleteToDo(todoId: string) {
    this.userCollection.doc(this._userActive._id).collection("ToDos").doc(todoId).delete();
    this.loadToDos();
  }

  public editToDo(todoId: string, edit: string) {
    this.userCollection.doc(this._userActive._id).collection("ToDos").doc(todoId).update(
      {
        msg: edit
      }
    );
  }

	public set userActive(value: User) {
		this._userActive = value;
  }
  
  public logOut() {
    this.firebaseAuth.auth.signOut().then(() => {
      this._userActive = null;
      this.isLogin = false;
      this.router.navigateByUrl("/start");
    });
  }
}
