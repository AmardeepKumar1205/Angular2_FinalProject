import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";

@Component({
    templateUrl:'app/users/addUser.component.html'
})
export class AddUserComponent {

  addUserForm:FormGroup;

    constructor(fb:FormBuilder){
        this.addUserForm=fb.group({
            name:['',Validators.required],
            email:['',Validators.required],
            phone:['',Validators.required],
            address:fb.group({
              street:['',Validators.required],
              suite:['',Validators.required],
              city:['',Validators.required],
              zipCode:['',Validators.required]
            })
        });
    }
    
    addUser(){
        console.log(this.addUserForm);
    }
  }

