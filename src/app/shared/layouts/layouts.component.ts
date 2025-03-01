import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FootherComponent } from "../foother/foother.component";

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FootherComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export default class LayoutsComponent {

}
