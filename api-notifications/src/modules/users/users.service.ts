import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import appSource from '../../database/data.source';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UsersService {
    private readonly repository: Repository<User>;

    constructor() {
        this.repository = appSource.getRepository(User);
    }

    async getAll(): Promise<User[]> {
        return await this.repository.find();
    }

    async getById(id: number): Promise<User> {
        return await this.repository.findOneByOrFail({ id });
    }

    async create(userDto: UserDto): Promise<User> {
        const user = this.repository.create(userDto);

        return await this.repository.save(user);
    }

    async update(id: number, userDto: UserDto): Promise<User> {
        const user = await this.repository.findOneByOrFail({ id });

        return this.repository.save({ ...user, ...userDto });
    }
}
