import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  members = [{id: 1, name: 'Lazy John Doe'}, {id: 2, name: 'Lazy Jane Doe'}];
  constructor() { }

  ngOnInit(): void {
  }
}
