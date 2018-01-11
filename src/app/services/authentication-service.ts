import {Injectable}  from '@angular/core';
import {iuser} from '../../../api';

@Injectable()
export class AuthenticationService {
    endpoint='/login';

    loginFn=(user:iuser):Promise<any>=>{

        
    }


}