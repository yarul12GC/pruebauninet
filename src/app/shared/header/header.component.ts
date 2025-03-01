import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
interface MenuItem {
  link: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuItems: MenuItem [] =[
    {
      link: '/peliculas',
    },
    {
      link: '/formulario',
    },
  ]
  

}
