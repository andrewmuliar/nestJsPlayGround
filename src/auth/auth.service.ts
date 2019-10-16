import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthencticationService } from '../_services/authentication.service';

@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly jwtService:JwtService, private readonly authencticationService:AuthencticationService) {
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: 'secret',
      });
    }
    
    async login(userID: any) {
      const resHandler = await this.authencticationService.getUserID(userID);
      const data = resHandler.records[0].get(0)['identity']['low']; // get user ID from DB;
      return {
        user: this.jwtService.sign(data),
      };
    }

    async validate(payload: any) {
      console.log('payload', payload);
      return { user:payload };
    }
}