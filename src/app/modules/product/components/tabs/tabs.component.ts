import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent {

  public tabs: { position: number, label: string }[] = [
    { position: 1, label: 'Historia' },
    { position: 2, label: 'Comentarios' },
    { position: 3, label: 'Preguntas' },
    { position: 4, label: 'Actualizaciones' }
  ];
  public currentTab = 1;

  public isCurrentTab(tab: { position: number, label: string }): boolean {
    return this.currentTab === tab.position;
  }

  public selectTab(tab: { position: number, label: string }): void {
    this.currentTab = tab.position;
  }

}
