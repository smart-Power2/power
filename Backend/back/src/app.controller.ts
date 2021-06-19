import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
//import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
@Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}
//   @UseGuards(AuthGuard('local'))
//   @Post('auth/login')
//   async login(@Request() req) {
//     return req.user;
//   }
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    console.log("req",req.user, req.body)
    return this.authService.login(req.user);
  }

  // @Post("/auth/signup")
  // signup(@Body() createUserDto: CreateUserDto) {
  //  return this.userService.signup(createUserDto);
  // }
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    console.log(req.headers);
    return req.user;
  }
}
