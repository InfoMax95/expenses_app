import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  homeform!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      // possiamo creare anche i nostri validatori
    })
  }

  onSubmit() {
    // const email = form.value.email;
    // const password = form.value.password;
    // add authservice
    console.log(this.homeform);
  }
}
