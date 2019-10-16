import { Injectable } from '@nestjs/common';
import {DB} from './db';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(DB);
    let s = DB.session();
    s.run(`MATCH (u:User)   
    RETURN u`).then(data => {
      s.close()       
      console.log('Somebody want my setup');
      let r = data.records.map(item => item.get(0)['properties'])
      console.log(r);   
    })
    return 'Hello World!';
  }
}
