import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  valCheck: string[] = ['remember'];
  password!: string;
  user!: string

  constructor() { }

  ngOnInit(): void {
  }

}
