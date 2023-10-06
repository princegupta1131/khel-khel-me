import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pcard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardPComponent implements OnInit {


  source = [{
    id: 1,
    title: "Ekstep Pitara",
    icon:"../../../assets/icons/The chicks fear.png",
    url: "https://www.prathamyouthnet.org/story/packs/video.php?nodeid=d91d18a1-d30f-47c9-829b-90bfdee14a79&parentnode=e5672698-aa2c-4eb7-a149-54b82ab247b7",
    objective: "This has poems, activities and handbooks",
    source:"Pratham"
  },
  {
    id: 2,
    title: "Animals",
    icon:"../../../assets/icons/jackal-drum.png",
    url: "https://diksha.gov.in/play/content/do_31381695158648012811422",
    objective: "This has activities for children with special needs",
    source:"DIKSHA"
  },
  {
    id: 3,
    title: "Vegetables",
    icon:"../../../assets/icons/Riya_s umbrella.png",
    url: "https://diksha.gov.in/play/content/do_31373422751785779217395",
    objective: "This has stories and poems",
    source:"DIKSHA"
  }
  ]

  data = this.source

  constructor() { }

  ngOnInit() {
  }

}
