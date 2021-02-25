import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSurveysUsers1614261777499 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "surveys_users",
                columns: [
                    {
                        name: "id",
                        type: "uiid",
                        isPrimary: true
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    { 
                        name: "survey_id",
                        type: "uuid"
                    },
                    {
                        name: "value",
                        type: "number",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestanp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("surveys_users");
    }

}
