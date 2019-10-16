import { Controller, Get, Body, Param, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from '../../app.service';
import { JwtStrategy } from '../../auth/auth.service';

@Controller('api/friends')
export class FriendsController {
  constructor(private readonly appService: AppService, private readonly auth:JwtStrategy) {}

  @Get()
  getHello(@Param() params) : string {
    return 'in friends controller';
  }

  @Post('login')
  async login(@Body() req){
    console.log('req', req.user.id);
    return this.auth.login(req.user.id)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/me')
  getProfile(@Request() req) {
    console.log('req. token', req.user);
    return req.user;
  }

}
