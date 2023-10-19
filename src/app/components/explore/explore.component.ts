import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage.service';

interface Chip {
  key: string;
  value: string;
  icon: any;
}
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})

export class ExploreComponent implements OnInit {
  filteredArray;
  data: any = JSON.parse(localStorage.getItem('resultArray'));
  allChips: Chip[] = [
    { key: 'All', value: 'all', icon: 'https://cdn-icons-png.flaticon.com/512/7787/7787487.png' },
    { key: 'Toys and puppets', value: 'djp_category_toys', icon: 'https://cdn-icons-png.flaticon.com/512/7082/7082148.png' },
    { key: 'Puzzles and games', value: 'djp_category_games', icon: 'https://cdn-icons-png.flaticon.com/512/10203/10203507.png' },
    { key: 'Stories and poems', value: 'djp_category_stories', icon: 'https://cdn-icons-png.flaticon.com/512/3500/3500690.png' },
    { key: 'Flashcards and sequence cards', value: 'djp_category_flashc', icon: 'https://cdn-icons-png.flaticon.com/512/3813/3813681.png' },
    { key: 'Activity Sheets', value: 'djp_category_activitys', icon: 'https://cdn-icons-png.flaticon.com/512/1668/1668531.png' },
    { key: 'Manuals and Guidebooks', value: 'djp_category_manuals', icon: 'https://cdn-icons-png.flaticon.com/512/6348/6348248.png' }
  ];
  selectedChips: Chip[] = [];
  selectedTab: Chip;
  constructor(private localStorageService: LocalStorageService, public route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.localStorageService.removeItem('filteredArray')
    this.localStorageService.setItem('filteredArray', JSON.stringify(this.data))
  }

  ngAfterViewInit(): void {

  }

  handleChipSelection(event: any) {
    this.selectedTab = this.allChips[event.index];
    if (this.selectedTab.value === 'all') {
      this.filteredArray = this.data;
    } else {
      this.filteredArray = this.data.filter((content: any) => {
        return content.keywords ? content.keywords.includes(this.selectedTab.value) : false
      })
    }
    this.localStorageService.setItem('filteredArray', JSON.stringify(this.filteredArray))
  }

}
