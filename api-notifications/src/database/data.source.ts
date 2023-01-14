import { User } from '../modules/users/entities/user.entity';
import { DataSource } from 'typeorm';

const appSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'node_pubsub',
    logging: false,
    synchronize: false,
    entities: [User],
    migrations: [`${__dirname}/migrations/**/*{.js,.ts}`]
});

export default appSource;
