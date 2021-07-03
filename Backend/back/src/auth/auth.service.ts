import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    const id = user.id;
    const type =user.type
    return {
      user_id:id,
      access_token: this.jwtService.sign(payload),
      type
    };
  }
}
