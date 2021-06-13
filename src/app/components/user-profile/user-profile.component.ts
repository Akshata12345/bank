import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  panelOpenState = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  toggleNav(nav:any) {
    if (nav.opened) {
      nav.close()
    } else {
      nav.open();
    }
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }


}
