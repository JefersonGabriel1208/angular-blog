import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string=""
  contentTitle:string=" "
  contentDescription=" "
  private id: string|null="0"

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
     value =>
      this.id=(value.get("id"))
    )




  }

  setValuesToComponent(id:string){
    const result= dataFake.filter(
      article => article.id.toString() == id)[0]

      this.contentTitle= result.cardtitle
      this.contentDescription =result.carddescription
      this.photoCover = result.photoCover

  }


}
