import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userName: string;
  repoList: any[]
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    this.repoList = [];
    this.getAllRepo();
  }

  getAllRepo() {
    this.userService.getAllRepos(this.userName).subscribe((res) => {
      if (res) {
        this.repoList = res;
      }
    });
  }

}
