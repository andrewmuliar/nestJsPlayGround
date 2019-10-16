import { Controller, Get, Body, Param, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { JwtStrategy } from './auth/auth.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService, private readonly auth:JwtStrategy) {}

  @Get()
  getHello(@Param() params) : string {
    console.log(params);
    return this.appService.getHello();
  }

  @Post('login')
  async login(@Body() req){
    console.log('login user req', req.userID);
    return await this.auth.login(req.userID);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req) {
    if(req.headers['user-agent'] == 'Dalvik/2.1.0 (Linux; U; Android 9; Pixel 3a XL Build/PQ3B.190801.002)'){
      return 'Have a nice phone, BRO!'
    }
    console.log('user', req.user);
    console.log('req. token', req.headers['user-agent']);
    return 'not that phone';
  }

}
