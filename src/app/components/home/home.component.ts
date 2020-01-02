import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listOfAllUsers: any[];
  originalUsers: any[]
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    // Initializing the variables 
    this.listOfAllUsers = [];
    this.originalUsers = [];
    this.getListOfUsers();
  }

  // Used to get the all the users from the user service.
  getListOfUsers() {
    this.userService.getAllUsers().subscribe((res) => {
      if (res) {
        this.listOfAllUsers = res;
        this.originalUsers = res;
      }
    })
  }

  // Used to navigate to user profile page with the user name.
  goToProfile(userName) {
    localStorage.setItem('userName', userName);
    this.router.navigateByUrl('/profile');
  }

  // Used to search the given username in the total list of all users.
  searchUsers(term) {
    if (term == '') {
      this.listOfAllUsers = this.originalUsers
    } else {
      this.listOfAllUsers = this.listOfAllUsers.filter((res) => {
        if (res.login.toLowerCase().includes(term)) {
          return res;
        }
      })
    }

    console.log(term, 'dd')
  }
}
