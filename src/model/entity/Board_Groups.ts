import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Board_Contents } from "./Board_Contents";

@Entity("Board_Groups")
export class Board_Groups{

    @PrimaryGeneratedColumn()
    group_id: number;
    
    @Column({length:15})
    name: string;

    @Column({length:30, nullable: true})
    description: string;

    @Column()
    authority: number;

    @OneToMany(
        (type)=>Board_Contents,
        (board_contents)=>board_contents.board_groups
    )
    board_contents:Board_Contents[];
}