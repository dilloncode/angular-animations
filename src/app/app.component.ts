import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button (click)="toggleState()">My Button</button>
  <ul>
    <li *ngFor="let item of items" [@myTrigger]='state'>{{ item }}</li>
  </ul>
  `,
  styles: [],
  animations: [
    trigger('myTrigger', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.4)'
      })),
      state('extra-large', style({
        transform: 'scale(2)'
      })),
      state('fadeIn', style({
        opacity: '1'
      })),
      //transition('* => *', animate('500ms ease-in'))
      transition('void => *', [
        style({ opacity: '0', transform: 'translateY(20px)' }),
        animate('500ms')
      ])
    ])
  ]
})
export class AppComponent {
  state: string = 'fadeIn';
  items = ['item1', 'item2', 'item3'];

  toggleState() {
    //this.state = this.state === 'small' ? 'large' : 'small';

    this.items.push('another item');
    this.state = "fadeIn";
  }
}
