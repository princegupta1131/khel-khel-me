import { Component, OnInit } from '@angular/core';

export interface Vegetable {
  name: string;
}
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})

export class ExploreComponent implements OnInit {
title = 'Explore';

vegetables: Vegetable[] = [
    {name: 'Loream item1'},
    {name: 'Lorep item2'},
    {name: 'Lomip item3'},
    {name: 'item4'},
    {name: 'Loream item 5'},
    {name: 'Loream item 6'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
