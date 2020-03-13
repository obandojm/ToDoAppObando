import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/Services/data-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  password: string;
  email: string;
  name: string;
  surname: string;

  constructor(private db: DataBaseService, private router: Router) { }

  singUp() {
    this.db.signUp(this.email, this.password, this.name, this.surname);
  }

  ngOnInit() {
  }


}
