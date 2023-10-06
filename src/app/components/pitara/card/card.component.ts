import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pcard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardPComponent implements OnInit {


  source = [{
    id: 1,
    title: "EkStep’s Jadui Pitara",
    icon:"./../../../../assets/images/pitara-box1.jpeg",
    lan: "Assamese",
    url: "https://www.prathamyouthnet.org/story/packs/video.php?nodeid=d91d18a1-d30f-47c9-829b-90bfdee14a79&parentnode=e5672698-aa2c-4eb7-a149-54b82ab247b7",
    language: "efln_as",
    theme: 'efln_brd',
    typec: 'efln_vid',
    objective: "This has poems, activities and handbooks",
    source:"Pratham"
  },
  {
    id: 2,
    title: "Sol’s Arc Jadui Pitara",
    icon:"https://play-lh.googleusercontent.com/sVful1qx4xoeH3FRIVtHcVpW2Sa5RYpJF8MO5HiScR7Szo5FbXnOD35LWHDA9hG7EA",
    type: "Read Along",
    about: "Animals",
    lan: "English",
    url: "https://diksha.gov.in/play/content/do_31381695158648012811422",
    language: "efln_en",
    theme: 'efln_anm',
    typec: 'efln_rda',
    objective: "This has activities for children with special needs",
    source:"DIKSHA"
  },
  {
    id: 3,
    title: "StoryWeaver Jadui Pitara",
    icon:"https://media.istockphoto.com/id/1127481536/vector/box-exploision-blast-open-red-gift-box-and-confetti-enter-to-win-prizes-win-lottery-quiz.jpg?s=612x612&w=0&k=20&c=c1V7U5jcBdJT7JmdUK-0SCJO7Nc4m4-xk3RW4aThY1Q=",
    type: "Read",
    about: "Birds",
    lan: "Gujarati",
    url: "https://diksha.gov.in/play/content/do_31373422751785779217395",
    language: "efln_gj",
    theme: 'efln_brd',
    typec: 'efln_rd',
    objective: "This has stories and poems",
    source:"DIKSHA"
  }
  ]

  data = this.source

  constructor() { }

  ngOnInit() {
  }

}
