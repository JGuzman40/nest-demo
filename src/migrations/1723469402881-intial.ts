import { MigrationInterface, QueryRunner } from 'typeorm';

export class Intial1723469402881 implements MigrationInterface {
  name = 'Intial1723469402881';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" (
      "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
      "name" character varying NOT NULL, 
      "email" character varying NOT NULL, 
      "createdAt" character varying NOT NULL, 
       CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "todos" (
      "id" SERIAL NOT NULL, 
      "title" character varying NOT NULL, 
      "description" character varying NOT NULL, 
      "isCompleted" boolean NOT NULL DEFAULT false, 
      CONSTRAINT "PK_ca8cafd59ca6faaf67995344225" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "todos"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
