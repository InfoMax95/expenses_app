import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  homeForm!: FormGroup;

  ngOnInit(): void {
    this.homeForm = new FormGroup({
      // nome: new FormControl(null, Validators.required),
      // email: new FormControl(null, [Validators.required, Validators.email]),
    })
  }

  onSubmit() {
    // const email = form.value.email;
    // const password = form.value.password;
    // add authservice
    console.log(this.homeForm);
  }

}
