import { Component, OnInit } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import { WpApiCustom } from 'wp-api-angular';
import 'rxjs/add/operator/toPromise';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent {
//   title = 'Angular app';

//   constructor(
//     private wpApiPosts: WpApiPosts,
//     private wpApiCustom: WpApiCustom
//   ) {

//     const subscription = this.wpApiCustom.getInstance('article')
//       .getList()
//       .subscribe(value => {
//         console.log(value.json());
//       });
//   }
// }

export class AppComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    console.log('appComponent init');
  }
  private roles: string[];
  private authority: string;

  constructor(private modalService: NgbModal) { }
 
}