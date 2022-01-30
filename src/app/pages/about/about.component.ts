import { MyServiceService } from './../../services/my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private ser : MyServiceService) { }
  loremtext:any;
  ngOnInit(): void {
this.loremtext=this.ser.getLorem()

}
}