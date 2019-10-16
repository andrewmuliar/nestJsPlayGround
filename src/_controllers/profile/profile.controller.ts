import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtStrategy } from '../../auth/auth.service';
import {ProfileService} from '../../_services/profile.service';

@Controller('api/profile')
export class ProfileController {
  constructor(private readonly auth:JwtStrategy, private readonly profileService:ProfileService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  async getProfile(@Request() req){
    // console.log('profile user', req.user.user);
    let profile = await this.profileService.getProfile(47); // need change from hardcode
    console.log('profile', profile);
    return  profile.records[0].get(0)['properties'];
    // let data = profile.then(
    //   result => {
    //       console.log('result proifle', result);
    //       return [... result.records.map(element => {
    //           return element.get(0).properties
    //       })][0]; // return 0 element for go out from array;
    //   },
    //   error => {
    //       console.log('get profile errro', error);
    //       return 'Error '+error;
    //   })
  }
}
