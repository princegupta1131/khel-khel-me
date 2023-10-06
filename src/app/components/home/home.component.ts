import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

 

  ngOnInit(): void {
    console.log(this.toppingList)
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
   clicked() {
    // this.language = '';
    // this.theme = ''
    // this.type = ''
    // this.data = this.source
  }
}
