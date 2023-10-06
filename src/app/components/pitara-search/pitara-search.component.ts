import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pitara-search',
  templateUrl: './pitara-search.component.html',
  styleUrls: ['./pitara-search.component.css']
})
export class PitaraSearchComponent implements OnInit {

  category = new FormControl('');
  categoryList = [
    {key: 'Toys and puppets',value: 'djp_category_toys' },
    {key: 'Puzzles and games',value: 'djp_category_games' },
    {key: 'Stories and poems',value: 'djp_category_stories' },
    {key: 'Flashcards and sequence cards',value: 'djp_category_flashc' },
    {key: 'Activity Sheets',value: 'djp_category_activitys' },
    {key: 'Manuals and Guidebooks',value: 'djp_category_manuals' }
  ];
  theme = new FormControl('');
  themeList = [{key: 'Animals & Birds',value: 'djp_theme_animalbird' },
  {key: 'Vegetables & fruits',value: 'djp_theme_veg_fruit' },
  {key: 'Trees & flowers',value: 'djp_theme_treefl' },
  {key: 'Me and my family',value: 'djp_theme_family' },
  {key: 'Festivals',value: 'djp_theme_festival' },
  {key: 'Numbers',value: 'djp_theme_numbers' }];

  type = new FormControl('');
  typeList = [
    {key: 'PDF/ Text',value: 'djp_type_doc' },
    {key: 'Flashcards',value: 'djp_type_fc' },
    {key: 'Videos',value: 'djp_type_video' },
    {key: 'Audios',value: 'djp_type_audio' },
    {key: 'Interactives',value: 'djp_type_interactive' },
    {key: 'Games',value: 'djp_type_game' }
  ];

  result:any;

  ngOnInit(): void {
  }
  constructor(){

  }

  themeChange() {
    // this.data = this.source.filter((item) => {
    //   return (this.language && this.type) ? (item.theme === this.theme && item.language === this.language && item.typec === this.type) : (this.language && !this.type) ? (item.language === this.language && item.theme === this.theme) : (!this.language && this.type) ? (item.typec === this.type && item.theme === this.theme) : item.theme === this.theme;
    // })
  }

  languageChange() {
    // this.data = this.source.filter((item) => {
    //   return (this.theme && this.type) ? (item.theme === this.theme && item.language === this.language && item.typec === this.type) : (this.type && !this.theme) ? (item.typec === this.type && item.language === this.language) : (!this.type && this.theme) ? (item.theme === this.theme && item.language === this.language) : item.language === this.language;
    // })
  }

  typeChange() {
  //   this.data = this.source.filter((item) => {
  //     return (this.theme && this.language) ? (item.theme === this.theme && item.language === this.language && item.typec === this.type) : (this.language && !this.theme) ? (item.language === this.language && item.typec === this.type) : (!this.language && this.theme) ? (item.theme === this.theme && item.typec === this.type) : item.typec === this.type;
  //   })
   }
  //  search() {
  //   this.router.navigate(['/explore'])
  // }
}