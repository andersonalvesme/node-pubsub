import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateLogsTable1673738011613 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'logs',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp'
                    },
                    {
                        name: 'log',
                        type: 'json'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('logs');
    }

}
