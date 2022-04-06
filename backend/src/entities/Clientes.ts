import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Cidade } from './Cidade';

@Entity("clientes")
export class Cliente {
    @PrimaryGeneratedColumn("increment")
    CLI_ID: number;

    @Column()
    CLI_NOME: string;

    @Column()
    CLI_NASCIDO: Date;

    @ManyToOne(() => Cidade)// referencia muitos para um (muito cliente de uma cidade)
    @JoinColumn({name: "CIDADE_ID"})// coluna de referencia na Cidade
    CIDADE_ID: Cidade;
}