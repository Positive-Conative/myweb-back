import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Guest_Coments } from "./Guest_Coments";

@Entity("Guest_Books")
export class Guest_Books{
    @PrimaryGeneratedColumn()
    guest_id: number;

    @Column({length:25})
    user_name: string;

    @Column({length:30})
    title: string;

    @Column({length:100})
    content: string;

    @OneToMany(
        (type)=>Guest_Coments,
        (guest_comments)=>guest_comments.guest_books
    )
    guest_comments:Guest_Coments[];
}
