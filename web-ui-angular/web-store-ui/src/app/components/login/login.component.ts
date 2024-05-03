import { Component, ViewEncapsulation } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  useLogIn:boolean = true;
}
