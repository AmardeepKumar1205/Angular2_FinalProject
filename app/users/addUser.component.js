"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let AddUserComponent = class AddUserComponent {
    constructor(fb) {
        this.addUserForm = fb.group({
            name: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            phone: ['', forms_1.Validators.required],
            address: fb.group({
                street: ['', forms_1.Validators.required],
                suite: ['', forms_1.Validators.required],
                city: ['', forms_1.Validators.required],
                zipCode: ['', forms_1.Validators.required]
            })
        });
    }
    addUser() {
        console.log(this.addUserForm);
    }
};
AddUserComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/users/addUser.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], AddUserComponent);
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=addUser.component.js.map