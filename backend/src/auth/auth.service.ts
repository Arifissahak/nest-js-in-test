// auth.service.ts
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User } from '../user/user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async register(username: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new this.userModel({ username, password: hashedPassword });
    return user.save();
  }

  // async login(username: string, password: string): Promise<string> {
  //   const user = await this.userModel.findOne({ username });

  //   if (!user) {
  //     throw new UnauthorizedException('Invalid credentials');
  //   }

  //   const isPasswordValid = await bcrypt.compare(password, user.password);

  //   if (!isPasswordValid) {
  //     throw new UnauthorizedException('Invalid credentials');
  //   }

  //   const token = jwt.sign({ username: user.username, sub: user._id }, 'secretKey', { expiresIn: '1h' });

  //   user.tokens.push(token);
  //   await user.save();

  //   return token;
  // }

  async login(username: string, password: string): Promise<{ token: string }> {
    const user = await this.userModel.findOne({ username });
  
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
  
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
  
    const token = jwt.sign({ username: user.username, sub: user._id }, 'secretKey', { expiresIn: '1h' });
  
    user.tokens.push(token);
    await user.save();
  
    return { token :token };
  }
  

  async logout(user: User, token: string): Promise<void> {
    console.log('Before logout - tokens:', user.tokens);
    await this.userModel.updateOne(
      { _id: user._id },
      { $pull: { tokens: token } },
    );
    console.log('After logout - tokens:', user.tokens);
  }
  
  async deleteToken(userId: string, token: string): Promise<void> {
    await this.userModel.findByIdAndUpdate(userId, { $pull: { tokens: token } });
  }

  async validateUser(payload: any): Promise<User> {
    return this.userModel.findById(payload.sub);
  }
}
