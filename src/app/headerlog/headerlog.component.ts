import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-headerlog',
  templateUrl: './headerlog.component.html',
  styleUrl: './headerlog.component.css'
})
export class HeaderlogComponent {
  isMenuOpen = false;

  constructor(private menuService: MenuService) {
    
    this.menuService.isMenuOpen$.subscribe(isOpen => this.isMenuOpen = isOpen);
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
