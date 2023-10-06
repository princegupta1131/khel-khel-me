import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from '../services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  constructor(public router: Router, public utils: UtilService) {

  }

  ngOnInit(): void {
    this.utils.search().subscribe((data) => {
     this.result=data.result
     console.log(this.result)
    })
  }

  search() {
    // this.router.navigate(['/explore'])
    const arr = [this.category.value, this.theme.value, this.type.value];
    const searchArray = arr.flat().filter((e)=>e);
    console.log(searchArray)
    let araaa=this.result.content.filter((content:any) => {return content.keywords.some((item:any)=>{searchArray.includes(item)})})
    console.log(araaa)
    this.router.navigate(['/explore'])


  }
}