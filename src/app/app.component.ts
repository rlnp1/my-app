import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
newMemberName = '';
members: string[] = [];

oninput(member: string){
  this.newMemberName = member;
  console.log(this.newMemberName)
  
}

addMember(){
  if(!this.newMemberName){


    return;
  }else{
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    console.log(this.members)
  }

}
cleartag(){

}

}
