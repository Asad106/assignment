import { MyServiceService } from './../../services/my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private ser : MyServiceService) { }
  ngOnInit(): void {
  }

}
