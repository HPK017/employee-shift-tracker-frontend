import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-component',
  imports: [MatFormFieldModule, MatCardModule, FormsModule, ReactiveFormsModule, MatIconModule, MatInputModule, MatButtonModule, RouterModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css',
})
export class RegisterComponent {

  registerForm : FormGroup;

  constructor(){
    this.registerForm = new FormGroup({
      fullname: new FormControl('', [
        Validators.required
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      password: new FormControl('', [
        Validators.required,
      ])
    });
  }
}
