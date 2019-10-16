import { Injectable } from '@nestjs/common';
import {DB} from './../db';


export class UserDTO{
    user:string
}

@Injectable()
export class AuthencticationService {
    getUserID(user):Promise<any> {
    let session = DB.session();
    return session.run(`MATCH (u:User) WHERE u.idToken = '${user}' RETURN u`)
    // .then(
    //     res => {
    //         console.log('res', res);
    //         res.records.map( item => {
    //             console.log('item', item);
    //         })
    //     }
    // );
    }
}