// auth.controller.ts
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body('username') username: string, @Body('password') password: string): Promise<any> {
    return this.authService.register(username, password);
  }

  @Post('login')
  async login(@Body('username') username: string, @Body('password') password: string): Promise<any> {
    return this.authService.login(username, password);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Req() req): Promise<any> {
    try {
      const { user, token } = req;
      console.log('Before deleteToken - userId:', user._id, 'token:', token);
      await this.authService.deleteToken(user._id, token);
      console.log('After deleteToken');
      await this.authService.logout(user, token);
      console.log('After logout');
      return { message: 'Logout successful' };
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

}
