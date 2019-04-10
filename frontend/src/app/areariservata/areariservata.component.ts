import { AreariservataService } from './areariservata.service';
import { AreariservataDTO } from './areariservata.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areariservata',
  templateUrl: './areariservata.component.html',
  styleUrls: ['./areariservata.component.css']
})
export class AreariservataComponent implements OnInit {

  //hero = {email: 'Email', password: 'Password', nome: 'Nome', congnome: 'Congnome'};
  areariservatadto:AreariservataDTO;

  constructor(public service: AreariservataService) { 
  }

  ngOnInit() {
    this.areariservatadto = new AreariservataDTO();
    this.areariservatadto.email='';
  }

  submitForm(){
    this.service.addUser(this.areariservatadto)
    .subscribe(result => {
      if(result != null && result.message != null && result.message != '') {
        this.areariservatadto.email = result.message;
      }
    });
    // console.log(this.areariservatadto.email);
  }



}
