import { MigrationInterface, QueryRunner } from "typeorm"

export class Agregarprecio1697748863366 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE producto ADD COLUMN precio numeric(10,2)');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE producto DROP COLUMN precio");
    }

}
