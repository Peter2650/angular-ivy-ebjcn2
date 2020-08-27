import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  
  line = [
    'It seems that named router outlet only works with full path:',
    '<a [routerLink]="[\'/home/member\', {outlets: {right: [\'edit\', member.id]}}]"></a>',
    'I would expect that it also would work with a relative path:',
    '<a [routerLink]="[{outlets: {right: [\'edit\', member.id]}}]"></a>',
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
