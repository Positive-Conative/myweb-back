import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Users } from "./Users";
import { Board_Groups } from "./Board_Groups";
import { Board_Coments } from "./Board_Coments";

@Entity("Board_Contents")
export class Board_Contents{

    @PrimaryGeneratedColumn()
    content_id: number;

    @ManyToOne(
        (type)=>Users,
        (users)=>users.board_contents,
        {nullable: false}
    )
    user: Users
    @ManyToOne(
        (type)=>Board_Groups,
        (board_groups)=>board_groups.board_contents,
        {nullable: false}
    )
    board_groups: Board_Groups
    
    @Column({length: 30})
    title: string;

    @Column({length: 300})
    content: string;

    @Column({length: 128, nullable: true})
    file_src: string;

    @Column({length: 128, nullable: true})
    image_src: string;

    @Column({default: 0})
    hit: number;

    @Column({default: 0})
    like: number;

    @OneToMany(
        (type)=>Board_Coments,
        (board_coments)=>board_coments.board_contents
    )
    board_coments:Board_Coments[];

    @CreateDateColumn()
    create_time: Date;

    @UpdateDateColumn()
    update_time: Date;
}