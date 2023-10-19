import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity()
export class Producto{
    @PrimaryGeneratedColumn('identity')
    id:number;

    @Column()
    name:string;
}