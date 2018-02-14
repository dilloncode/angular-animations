import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button (click)="toggleState()" [@removeMe]='btnState'>My Button</button>
  <ul>
    <li *ngFor="let item of items" [@myTrigger]='state' (@myTrigger.start)="animStart($event)" (@myTrigger.done)="animDone($event)">{{ item }}</li>
  </ul>
  {{ animDetails }}
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
        animate(2000, keyframes([
          style({ opacity: 0, transform: 'translateY(-30px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(5px)', offset: .3 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ]))
      ])
    ]),
    trigger('removeMe', [
      state('out', style({
        transform: 'scale(0)',
        opacity: 0
      })),

      transition('* => out', [
        animate('500ms 0s ease-in', keyframes([
          style({ opacity: 1, transform: 'translateX(-8px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 0.3 }),
          style({ opacity: 0, transform: 'translateX(50px)', offset: 1 })
        ]))
      ])

    ])
  ]
})
export class AppComponent {
  state: string = 'fadeIn';
  items = new Array();
  animDetails: string = 'Waiting';
  btnState: string = 'in';

  toggleState() {
    //this.state = this.state === 'small' ? 'large' : 'small';

    this.items.push('another item');
    this.state = "fadeIn";
    this.btnState = 'out';
  }

  animStart(event: any) {
    console.log('Animation started', event);
  }

  animDone(event: any) {
    this.animDetails = 'It took me ' + event.totalTime + 'ms to complete';
  }
}
