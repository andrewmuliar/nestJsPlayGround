import { Injectable } from '@nestjs/common';
import {DB} from './../db';

@Injectable()
export class PostsService {
    getPosts(user):Object {
    let session = DB.session();
    return session.run(`MATCH (u:User)-[:OWNER]->(p:POST)
                        WHERE ID(u) = '${user}'
                        RETURN p`).then(
        result => {
            console.log('result', result);
            let postsObject = result.records.map(element => {
                return element.get(0)
            }); // return 0 element for go out from array;
            console.log('postsObject', postsObject);
            // const returnObject = {};
            // for (let key in profileObject){
            //     if(keysToReturn.includes(key)){ // return specific keys from object;
            //         returnObject[key] = profileObject[key];
            //     }
            // }
            return postsObject;
        },
        error => {
            console.log('get profile errro', error);
            return 'Error '+error;
        })
  }
}
        // resultPromise.then(data => {
        // let r = data.records.map(item => {
        // return {dream:item.get(0)['properties'], dream_id:item.get(0)['identity']['low'] } 
        // })