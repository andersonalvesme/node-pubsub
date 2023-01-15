import { User } from '../modules/users/entities/user.entity';
import { DataSource } from 'typeorm';
import * as process from 'process';
import { config } from 'dotenv';

config();

const appSource = new DataSource({
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    logging: false,
    synchronize: false,
    entities: [User],
    migrations: [`${__dirname}/migrations/**/*{.js,.ts}`]
});

export default appSource;
