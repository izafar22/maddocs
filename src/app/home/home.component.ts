import { Component} from '@angular/core';
import {HomeserviceService} from './homeservice.service';
import {UtilityService} from './../services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
 homeServic: string;
 grtDay:string;
 utilserv:any;
  constructor(private homeService: HomeserviceService,private utilityService: UtilityService) { }

  ngOnInit() {
  this.homeServic= this.homeService.getContent();
  console.log(this.homeServic);
 
   this.grtDay = (function(){
    return "The great day and th travel"; 
  })();
  this.utilserv=this.utilityService.getData() + this.grtDay;
}



}


