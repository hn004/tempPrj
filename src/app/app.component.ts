import { Component } from '@angular/core';
import { database } from './dataType';
import { DbserviceService } from './dbservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dbService:DbserviceService){

  }


title(title: any) {
  throw new Error('Method not implemented.');
}



submit(data:database) {

  console.log(data);

  this.dbService.addDbValues(data).subscribe((result)=>{
    if(result){
      console.log("data Added Successfully");
    }
  })

}



}
