import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, ManyToOne} from "typeorm";
import { Users } from "./Users";

@Entity("Question_Boards")
export class Question_Boards{
    @PrimaryGeneratedColumn()
    question_id: number;

    @ManyToOne(
        (type)=>Users,
        (users)=>users.question_boards,
        {nullable:false}
    )
    user: Users

    @Column({length:30})
    title: string;

    @Column({length:100})
    content: string;

    @Column({length:128})
    img_src: string;

    @Column({length:150})
    admin_content: string;

    @Column()
    admin_date: Date;

    @CreateDateColumn()
    create_time: Date;

    @UpdateDateColumn()
    update_time: Date;
}
