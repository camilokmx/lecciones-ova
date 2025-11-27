import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  
  _menuItems = [
    { label: 'Introducción', path: 'introduccion'},
    { label: 'Objetivos', path: 'objetivos'},
    { label: 'Contenido', path: 'contenido'},
    { label: 'Actividad', path: 'actividad'},
  ]
  _currentPath = location.pathname;
  _prevAvailable = false;
  _nextAvailable = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this._currentPath = location.pathname;      
      const currentIndex = this.getIndexPath(this._currentPath);
      this._prevAvailable = currentIndex > 0;
      this._nextAvailable = currentIndex < this._menuItems.length - 1;
    });
  }

  getIndexPath(path: string): number {
    return this._menuItems.findIndex(item => item.path === path.replace('/',''));
  }

  goPrevious() {
    const currentIndex = this.getIndexPath(this._currentPath);
    if (currentIndex > 0) {
      const previousItem = this._menuItems[currentIndex - 1];
      this.router.navigate([previousItem.path]);
    }
  }
  goNext() {
    const currentIndex = this.getIndexPath(this._currentPath);
    if (currentIndex < this._menuItems.length - 1) {
      const nextItem = this._menuItems[currentIndex + 1];
      this.router.navigate([nextItem.path]);
    }
  }
}