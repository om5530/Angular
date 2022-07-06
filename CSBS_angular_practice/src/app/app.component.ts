import { Component } from '@angular/core';
import { UserServiceService } from './service/user-service.service';
import { UserDataService } from './service/user-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'omkarApp';
  reuse = 'Reusable Component'

  users:any;
  constructor(private userData : UserServiceService ,private  userInformation:UserDataService) {
    // console.log('userData', userData.user())
    // this.users =userData.user()

    userInformation.users().subscribe((data)=>{this.users = data
    console.log('data',data)
    })
  }
  userInfo = [
    { name: 'omkar', email: 'omkar@123.com' },
    { name: 'sai', email: 'sai@123.com' },
    { name: 'rupesh', email: 'rupesh@123.com' },
  ]

  getName(name:string,lastName:string){
    alert(name + " "  +lastName)
  }

  //make counter
  count = 0
  counter(type:string){
    type === 'add' ? this.count++ :this.count--
  }
  data = 10;
  updateChild() {
    this.data = Math.floor(Math.random() * 100)
  }

  tiitle = "Site data child to parent component"
  updateData(item: any) {
    console.log(item)
  }

}
