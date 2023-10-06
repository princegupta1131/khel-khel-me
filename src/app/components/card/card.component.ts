import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  source = [{
    id: 1,
    title: "কুকুৰা পোৱালিৰ ভয় (The chicks fear)",
    type: "Video",
    about: "Birds",
    icon:"../../../assets/icons/The chicks fear.png",
    lan: "Assamese",
    url: "https://www.prathamyouthnet.org/story/packs/video.php?nodeid=d91d18a1-d30f-47c9-829b-90bfdee14a79&parentnode=e5672698-aa2c-4eb7-a149-54b82ab247b7",
    language: "efln_as",
    theme: 'efln_brd',
    typec: 'efln_vid',
    objective: "Develops Observation, wonder, curiosity, and exploration",
    source:"Pratham"
  },
  {
    id: 2,
    title: "Jackal and the Drum",
    icon:"https://i.ytimg.com/vi/CeTMThtg0VQ/maxresdefault.jpg",
    type: "Read Along",
    about: "Animals",
    lan: "English",
    url: "https://diksha.gov.in/play/content/do_31381695158648012811422",
    language: "efln_en",
    theme: 'efln_anm',
    typec: 'efln_rda',
    objective: "Differentiates sounds by their pitch, volume and sound patterns",
    source:"DIKSHA"
  },
  {
    id: 3,
    title: "રિયાની લાલ છત્રી (Riya's umbrella)",
    icon:"../../../assets/icons/Riya_s umbrella.png",
    type: "Read",
    about: "Birds",
    lan: "Gujarati",
    url: "https://diksha.gov.in/play/content/do_31373422751785779217395",
    language: "efln_gj",
    theme: 'efln_brd',
    typec: 'efln_rd',
    objective: "Shows care for and joy in engaging with all life forms",
    source:"DIKSHA"
  },
  {
    id: 4,
    title: "कच..कच.. (Kach..Kach..)",
    type: "Audio",
    icon:"../../../assets/icons/kachkach.png",
    about: "Animals",
    lan: "Hindi",
    url: "https://www.prathamyouthnet.org/story/listen/listen.php?nodeid=season1_hi_02&parentnode=season1_hindi",
    language: "efln_hi",
    theme: 'efln_anm',
    typec: 'efln_aud',
    objective: "Comprehends narrated/read-out stories and identifies characters, storyline and what the author wants to say",
    source:"Pratham"
  },
  {
    id: 5,
    title: "आंब्याचं झाड (Mango Tree)",
    type: "Read Along",
    icon:"https://i.ytimg.com/vi/V8tfQlWimCQ/sddefault.jpg",
    about: "Nature",
    lan: "Marathi",
    url: "https://prathamopenschool.org/CourseContent/Games/Ambyanch_Zad_MR/index.html",
    language: "efln_mar",
    theme: 'efln_ntr',
    typec: 'efln_rda',
    objective: "Shows kindness and helpfulness to others (including animals, plants) when they are in need",
    source:"Pratham"
  }
  ]

  data = this.source

  constructor() { }

  ngOnInit() {
  }

}
