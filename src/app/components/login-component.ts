import {Component,OnInit}  from '@angular/core';
import {FormGroup,FormArray,FormBuilder,FormControl}  from '@angular/forms';
import {iuser} from '../../../api';


@Component({
    selector: 'login',
    templateUrl: './login-component.html'
})
export class LoginComponent extends FormGroup implements OnInit{

    constructor(private fb:FormBuilder){
        super({
            username:new FormControl('abc'),
            password:new FormControl('xyz')
        });
    }

    ngOnInit(){

    }

}