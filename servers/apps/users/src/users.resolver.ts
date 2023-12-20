import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BadRequestException, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  ActivationResponse,
  LoginResponse,
  LogoutResponse,
  RegisterResponse,
} from './types/user.types';
import { ActivationDto, LoginDto, RegisterDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { Response } from 'express';
import { AuthGuard } from './guards/auth.guard';

@Resolver('User') // @UseFilters()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerDto') registerDto: RegisterDto,
    @Context()
    context: {
      res: Response;
    },
  ): Promise<RegisterResponse> {
    if (
      !registerDto.name ||
      !registerDto.email ||
      !registerDto.password ||
      !registerDto.phone_number
    ) {
      throw new BadRequestException('Please fill all the fields');
    }

    const { activation_token } = await this.usersService.register(
      registerDto,
      context.res,
    );
    return { activation_token };
  }

  @Mutation(() => ActivationResponse)
  async activateUser(
    @Args('activationDto') activationDto: ActivationDto,
    @Context() context: { res: Response },
  ): Promise<ActivationResponse> {
    return await this.usersService.activateUser(activationDto, context.res);
  }

  @Mutation(() => LoginResponse)
  async login(@Args('loginDto') loginDto: LoginDto): Promise<LoginResponse> {
    return await this.usersService.login(loginDto);
  }

  @Query(() => LoginResponse)
  @UseGuards(AuthGuard)
  async getLoggedInUser(@Context() context: { req: Request }) {
    return await this.usersService.getLoggedInUser(context.req);
  }
  @Query(() => LogoutResponse)
  @UseGuards(AuthGuard)
  async logoutUser(@Context() context: { req: Request }) {
    return await this.usersService.logoutUser(context.req);
  }

  @Query(() => [User])
  async getUsers() {
    return this.usersService.getUsers();
  }
}
