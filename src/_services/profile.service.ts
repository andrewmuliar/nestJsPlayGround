import { Injectable } from '@nestjs/common';
import {DB} from './../db';

@Injectable()
export class ProfileService {
  getProfile(user:any):Promise<any>{
    let s = DB.session();
    console.log('profile service user', user);
    return s.run(`MATCH (u:User) WHERE ID(u) = ${user} RETURN u`);
  }
}
