import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Users } from "./Users";
import { Board_Contents } from "./Board_Contents";

@Entity("Board_Coments")
export class Board_Coments{

    @PrimaryGeneratedColumn()
    coment_id: number;

    @ManyToOne(
        (type)=>Users,
        (users)=>users.board_coments,
        {nullable: false}
    )
    user: Users

    @ManyToOne(
        (type)=>Board_Contents,
        (board_contents)=>board_contents.board_coments,
        {nullable: false}
    )
    board_contents: Board_Contents

    @Column({length: 100})
    content: string;

    @Column()
    like: string;

    @CreateDateColumn()
    create_time: Date;

    @UpdateDateColumn()
    update_time: Date;
}