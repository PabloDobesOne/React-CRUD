import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClientes1649269188861 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clientes",
                columns: [
                    {
                        name: "CLI_ID",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: "CLI_NOME",
                        type: "varchar(50)",
                        isNullable: false
                    },
                    {
                        name: "CLI_NASCIDO",
                        type: "date"
                    },
                    {
                        name: "CIDADE_ID",
                        type: "integer",
                    }
                ],
                foreignKeys: [// chave estrangeira
                    {
                        name: "fk_clientes_cidade",
                        columnNames: ["CIDADE_ID"],// coluna que recebera um fk
                        referencedTableName: "cidades",// table de referencia
                        referencedColumnNames: ["CIDADE_ID"]// coluna de referencia
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clientes")
    }

}
