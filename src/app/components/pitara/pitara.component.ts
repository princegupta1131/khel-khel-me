import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pitara',
  templateUrl: './pitara.component.html',
  styleUrls: ['./pitara.component.scss']
})
export class PitaraComponent implements OnInit {
  source = [{
    id: 1,
    title: 'Ekstep Jadui Pitara',
    icon:"../../../assets/icons/pitara.png",
    url: "https://www.prathamyouthnet.org/story/packs/video.php?nodeid=d91d18a1-d30f-47c9-829b-90bfdee14a79&parentnode=e5672698-aa2c-4eb7-a149-54b82ab247b7",
    objective: "poems,activities and handbooks",
  },
  {
    id: 2,
    title: 'Sols Arc Jadui Pitara',
    icon:"../../../assets/icons/pitara.png",
    url: "https://www.prathamyouthnet.org/story/packs/video.php?nodeid=d91d18a1-d30f-47c9-829b-90bfdee14a79&parentnode=e5672698-aa2c-4eb7-a149-54b82ab247b7",
    objective: "activities for children with special needs",
  },
  {
    id: 3,
    title: 'Storyweaver Jadui Pitara',
    icon:"../../../assets/icons/pitara.png",
    url: "https://www.prathamyouthnet.org/story/packs/video.php?nodeid=d91d18a1-d30f-47c9-829b-90bfdee14a79&parentnode=e5672698-aa2c-4eb7-a149-54b82ab247b7",
    objective: "stories and poems",
  }
  ]

  data = this.source
  constructor() { }

  ngOnInit(): void {
  }

}
