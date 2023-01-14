import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersEntries1673662375487 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO users (name,email,phone,subscribed,channels)
            VALUES ('Karen T. Childs','KarenTChilds@armyspy.com','3178786409','1,3','1,2,3')`
        );
        await queryRunner.query(
            `INSERT INTO users (name,email,phone,subscribed,channels)
            VALUES ('Robert D. Kitchen','RobertDKitchen@rhyta.com','8567153544','2','2')`
        );
        await queryRunner.query(
            `INSERT INTO users (name,email,phone,subscribed,channels)
            VALUES ('Liz T. Hollins','LizTHollins@rhyta.com','2187763959','3','1,3')`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM users WHERE email = 'KarenTChilds@armyspy.com'`);
        await queryRunner.query(`DELETE FROM users WHERE email = 'RobertDKitchen@rhyta.com'`);
        await queryRunner.query(`DELETE FROM users WHERE email = 'LizTHollins@rhyta.com'`);
    }

}
