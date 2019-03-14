import { Component, OnInit } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
import { WpApiCustom } from 'wp-api-angular';
import 'rxjs/add/operator/toPromise';
import { TokenStorageService } from './auth/token-storage.service';

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
  private roles: string[];
  private authority: string;
 
  constructor(private tokenStorage: TokenStorageService) { }
 
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }
}