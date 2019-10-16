import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtStrategy } from './auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { FriendsController } from './_controllers/friends/friends.controller';
import { ProfileController } from './_controllers/profile/profile.controller';
import { ProfileService } from './_services/profile.service';
import { PostsController } from './_controllers/posts/posts.controller';
import { PostsService } from './_services/posts.service';
import { AuthencticationService } from './_services/authentication.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'secret'
      // signOptions: { expiresIn: '' },
    }),
  ],
  controllers: [AppController, ProfileController, FriendsController, PostsController],
  providers: [AppService, JwtStrategy, AuthencticationService, ProfileService, PostsService],
  exports:[JwtStrategy]
})

export class AppModule {
}
