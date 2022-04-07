import { 
    Entity,
    Column,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity("cidades") // referencia a qual table
export class Cidade {
    // setando referencia de cada coluna da tabela
    @PrimaryGeneratedColumn("increment")
    public CIDADE_ID: number;

    @Column()
    CIDADE_NOME: string;

    @Column()
    CIDADE_UF: string;

}