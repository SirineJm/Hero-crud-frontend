import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {


  heros:any;

  constructor(public list: SharedService) {}

  ngOnInit(): void {
    this.list.getAllHeros().subscribe(
      res=>{
       console.log(res);
       this.heros=res;
      },

      err=>{
        console.log(err);
      }
    );
  }

delete(id:any){
  this.list.deleteHero(id).subscribe(
    res=>{
      console.log(res); 
      this.ngOnInit();
    },
    err=>{
      console.log(err);
      
    }
  )
}

}
