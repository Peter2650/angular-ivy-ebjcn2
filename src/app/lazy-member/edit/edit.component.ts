import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id = 0;

  ngOnInit(): void {
    this.route.paramMap
    .subscribe((data) => {
      this.id = +data.get('id');
    });
  }
}
