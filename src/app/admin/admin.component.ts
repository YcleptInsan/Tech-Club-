import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }
  submitForm(name: string, email: string, hobbies: string ) {
    let newMember: Member = new Member(name,email,hobbies);
    this.memberService.addMember(newMember)
  }
}
