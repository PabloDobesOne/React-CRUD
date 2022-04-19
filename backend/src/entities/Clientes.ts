import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Cidade } from './Cidade';

@Entity("clientes")
export class Cliente {
    @PrimaryGeneratedColumn("increment")
    CLI_ID: number;

    @Column()
    CLI_NOME: string;

    @Column({type: "date"})
    CLI_NASCIDO: Date | string;

    @Column()
    CIDADE_ID: number;

    @ManyToOne(() => Cidade)// referencia muitos para um (muito cliente de uma cidade)
    @JoinColumn({name: "CIDADE_ID"})// coluna de referencia na table de clientes
    CIDADE: Cidade;
}