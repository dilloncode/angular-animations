import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button (click)="toggleState()">My Button</button>
  <ul>
    <li *ngFor="let item of items" [@myTrigger]='state'>{{ item }}</li>
  </ul>
  `,
  styles: [`
  ul { 
    list-style-top: none;
     margin: 30px 30px 0 0;
      padding: 0;
  }
  li {
    padding: 15px;
    width: 100%;
    background: #f1f1f1;
    margin-bottom: 2px;
    font-weight: bold;
  }
  `],
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

      transition('void => *', [
        animate(500, keyframes([
          style({opacity: 0, transform: 'translateY(-30px)', offset: 0}),
          style({opacity: 1, transform: 'translateY(5px)', offset: .3}),
          style({opacity: 1, transform: 'translateY(0)', offset: 1}),
        ]))
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
