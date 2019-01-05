import { Component } from '@angular/core';
import { userInfo } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name;
  address;
  city;
  pinCode;

  userName;
  userAddress
  userCity
  userPinCode

  users = [];
  user = { 'id': '', 'name': '', 'address': '', 'city': '', 'pincode': '' }
  newObject: any;
  object: any;

  addUser() {
    this.userName = this.name;
    this.userAddress = this.address;
    this.userCity = this.city;
    this.userPinCode = this.pinCode;

    this.user.name = this.userName;
    this.user.address = this.userAddress
    this.user.city = this.userCity;
    this.user.pincode = this.userPinCode;

    this.newObject = Object.assign({}, this.user)

    this.users.push(this.newObject)
    console.log(this.users);



    this.name = '';
    this.address = '';
    this.city = '';
    this.pinCode = '';

    editUser()
  }

  editUser() {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].name == 'asd') {
        let change = this.users[i]

        change.name = 'ace';
      }
    }
  }

}
