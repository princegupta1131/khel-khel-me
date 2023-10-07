import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pitara-search',
  templateUrl: './pitara-search.component.html',
  styleUrls: ['./pitara-search.component.scss']
})
export class PitaraSearchComponent implements OnInit {

  category = new FormControl('');
  categoryList = [
    { key: 'Toys and puppets', value: 'djp_category_toys' },
    { key: 'Puzzles and games', value: 'djp_category_games' },
    { key: 'Stories and poems', value: 'djp_category_stories' },
    { key: 'Flashcards and sequence cards', value: 'djp_category_flashc' },
    { key: 'Activity Sheets', value: 'djp_category_activitys' },
    { key: 'Manuals and Guidebooks', value: 'djp_category_manuals' }
  ];
  theme = new FormControl('');
  themeList = [{ key: 'Animals & Birds', value: 'djp_theme_animalbird' },
  { key: 'Vegetables & fruits', value: 'djp_theme_veg_fruit' },
  { key: 'Trees & flowers', value: 'djp_theme_treefl' },
  { key: 'Me and my family', value: 'djp_theme_family' },
  { key: 'Festivals', value: 'djp_theme_festival' },
  { key: 'Numbers', value: 'djp_theme_numbers' }];

  type = new FormControl('');
  typeList = [
    { key: 'PDF/ Text', value: 'djp_type_doc' },
    { key: 'Flashcards', value: 'djp_type_fc' },
    { key: 'Videos', value: 'djp_type_video' },
    { key: 'Audios', value: 'djp_type_audio' },
    { key: 'Interactives', value: 'djp_type_interactive' },
    { key: 'Games', value: 'djp_type_game' }
  ];

  result: any;
  id: string;
  data: any;

  constructor(public route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    const result = JSON.parse(localStorage.getItem('result'));
    this.data = result.filter((content => {
      return content.identifier === this.id
    }))[0]
  }
}