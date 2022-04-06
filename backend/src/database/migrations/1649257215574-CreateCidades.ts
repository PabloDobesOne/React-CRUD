import {IsNull, MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCidades1649257215574 implements MigrationInterface {

    // Enviar Dados da Migration para o Database
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cidades", // nome da table
                columns: [       // colunas da 
                    {
                        name: "CIDADE_ID",
                        type: "integer",
                        isPrimary: true,
                        isNullable: true
                    },
                    {
                        name: "CIDADE_NOME",
                        type: "varchar(50)",
                        isNullable: false
                    },
                    {
                        name: "CIDADE_UF",
                        type: "varchar(2)",
                        isNullable: false
                    }
                ]
            })
        )
    }

    // Reverte Dados da Migration no Database
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cidades");
    }

}