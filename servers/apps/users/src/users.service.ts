import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ActivationDto, LoginDto, RegisterDto } from './dto/user.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';
import { EmailService } from './email/email.service';
import { TokenSender } from './utils/sendToken';
import { LogoutResponse } from './types/user.types';

interface UserData {
  name: string;
  email: string;
  password: string;
  phone_number: number;
}
@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly emailService: EmailService,
  ) {}

  //   Register user
  async register(registerDto: RegisterDto, response: Response) {
    const { name, password, email, phone_number } = registerDto;

    const isEmailExist = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (isEmailExist) {
      throw new BadRequestException('User already exist with this email!');
    }

    const userWithPhoneNumber = await this.prisma.user.findFirst({
      where: {
        phone_number: phone_number,
      },
    });

    if (userWithPhoneNumber) {
      throw new BadRequestException(
        'User already exist with this phone number!',
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      name,
      password: hashedPassword,
      email,
      phone_number,
    };

    const activationToken = await this.createActivationToken(user);

    const activationCode = activationToken.activationCode;

    const activation_token = activationToken.token;

    await this.emailService.sendMail({
      email,
      subject: 'Activate your account!',
      template: './activation-mail',
      name,
      activationCode,
    });

    return { activation_token, response };
  }

  // Create activation token
  async createActivationToken(user: UserData) {
    const activationCode = Math.floor(1000 + Math.random() * 9000).toString();

    const token = this.jwtService.sign(
      {
        user,
        activationCode,
      },
      {
        secret: this.configService.get<string>('ACTIVATION_SECRET'),
        expiresIn: '5m',
      },
    );
    return { token, activationCode };
  }

  // Activate user
  async activateUser(activationDto: ActivationDto, response: Response) {
    const { activationToken, activationCode } = activationDto;

    const newUser: { user: UserData; activationCode: string } =
      this.jwtService.verify(activationToken, {
        secret: this.configService.get<string>('ACTIVATION_SECRET'),
      });

    if (newUser.activationCode !== activationCode) {
      throw new BadRequestException('Invalid activation code');
    }

    const { email, name, password, phone_number } = newUser.user;

    const existUser = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existUser) {
      throw new BadRequestException('User already exist with this email!');
    }

    const user = this.prisma.user.create({
      data: {
        email,
        name,
        password,
        phone_number,
      },
    });

    return { user, response };
  }

  //   Login user
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user && (await this.comparePassword(password, user.password))) {
      const tokenSender = new TokenSender(this.configService, this.jwtService);
      return tokenSender.sendToken(user);
    } else {
      return {
        user: null,
        accessToken: null,
        refreshToken: null,
        error: {
          message: 'Invalid email or password',
        },
      };
    }
  }

  // Compare password
  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  // Get logged in user
  async getLoggedInUser(req: any): Promise<any> {
    const user = req.user;
    const refreshToken = req.refreshtoken;
    const accessToken = req.accesstoken;

    return { user, refreshToken, accessToken };
  }

  // Logout user
  async logoutUser(req: any): Promise<LogoutResponse> {
    req.user = null;
    req.accessToken = null;
    req.refreshToken = null;
    return { message: 'Logged out successfully' };
  }

  //   Get all users
  async getUsers() {
    return await this.prisma.user.findMany();
  }
}
