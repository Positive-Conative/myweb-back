import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany} from "typeorm";
import { Guest_Books } from "./GuestBooks";
import { Board_Contents } from "./Board_Contents";
import { Board_Coments } from "./Board_Coments";
import { Question_Boards } from "./Question_Boards";

@Entity("Users")
export class Users{
    @Column({
        primary : true,
        length: 35
    })
    email: string;

    @Column({length: 15})
    password: string;

    @Column({length: 25})
    name: string;

    @Column({length: 25})
    nickname: string;

    @Column({
        length: 50,
        nullable: true
    })
    address?: string;

    @Column()
    gender: boolean;

    @Column({nullable: true})
    age?: number;

    @CreateDateColumn()
    create_time: Date;

    @UpdateDateColumn()
    update_time: Date;

    @OneToMany(
        (type)=>Board_Contents,
        (board_contents)=>board_contents.user
    )
    board_contents:Board_Contents[];

    @OneToMany(
        (type)=>Board_Coments,
        (board_coments)=>board_coments.user
    )
    board_coments:Board_Coments[];

    @OneToMany(
        (type)=>Question_Boards,
        (question_boards)=>question_boards.user
    )
    question_boards:Question_Boards[];
    // static findByName(id: number, pw: string) {
    //     return this.createQueryBuilder("User")
    //         .where("User.id = :id", { id })
    //         .andWhere("User.pw = :pw", { pw })
    //         .getMany();
    // }
}
