import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UserDto } from './dtos/user.dto';

@Controller('users')
export class UsersController {
    constructor(
        private readonly service: UsersService
    ) {
    }

    @Get()
    async getAll(): Promise<User[]> {
        return await this.service.getAll();
    }

    @Get(':id')
    async getById(@Param() id: number): Promise<User> {
        return await this.service.getById(id);
    }

    @Post()
    async create(@Body() user: UserDto): Promise<User> {
        return await this.service.create(user);
    }

    @Patch(':id')
    async update(
        @Param() id: number,
        @Body() user: UserDto
    ): Promise<User> {
        return await this.service.update(id, user);
    }
}
