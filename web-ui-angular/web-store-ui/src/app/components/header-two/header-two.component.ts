import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-two',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header-two.component.html',
  styleUrl: './header-two.component.css'
})
export class HeaderTwoComponent {
  sideBarActive: boolean = false;
  public isBtnActive: number = 1;
  toggleBtn(id: number) {
    this.isBtnActive = id
  }
}
