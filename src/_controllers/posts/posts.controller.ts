import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {PostsService} from '../../_services/posts.service';

@Controller('api/posts')
export class PostsController {
  constructor(private readonly postsService:PostsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getProfile(@Request() req): Object {
    // console.log('profile user', req.user);
    return this.postsService.getPosts(req.user.user);
  }
}
