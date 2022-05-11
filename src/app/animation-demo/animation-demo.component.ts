import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css'],
  animations:[
    trigger('openClose',[
      state('open', style({
        height:'500px',
        backgroundColor:'crimson'
      })),
      state('close', style({
        height:'250px',
        backgroundColor:'aqua'
      })),
      transition('open=>close',[
        animate('3s')
      ]),
      transition('close=>open',[
        animate('2s')
      ])
    ])
  ]
})
export class AnimationDemoComponent implements OnInit {
isOpen=true;
  constructor() { }

  ngOnInit(): void {
  }
toggle(){
this.isOpen=!this.isOpen
}
}
