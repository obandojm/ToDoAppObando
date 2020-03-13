import { Component, OnInit } from '@angular/core';
import { DataBaseService } from 'src/app/Services/data-base.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  constructor(private db: DataBaseService) { }

  ngOnInit() {
  }

  logIn() {
    this.db.logIn(this.email, this.password);
  }
}
