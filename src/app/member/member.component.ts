import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [MemberService]
})

  export class MemberComponent implements OnInit {
    members: FirebaseListObservable<any[]>;
    currentRoute: string = this.router.url;
    
    constructor(private router: Router, private memberService: MemberService) { }

    ngOnInit() {
      this.members = this.memberService.getMembers();
    }

    goToDetailPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  };
}
