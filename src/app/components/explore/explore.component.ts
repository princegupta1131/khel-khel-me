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
data: any = JSON.parse(localStorage.getItem('filteredArray'));
vegetables: Vegetable[] = [
    {name: 'Recently added'},
    {name: 'Top rated'},
    {name: 'Featured'},
    {name: 'item4'},
    {name: 'Loream item 5'},
    {name: 'Loream item 6'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
