import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private menuService: MenuService) {
    // Subscribe to the menu state changes if needed
    this.menuService.isMenuOpen$.subscribe(isOpen => this.isMenuOpen = isOpen);
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
