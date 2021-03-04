import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Guest_Books } from "./GuestBooks";

@Entity("Guest_Coments")
export class Guest_Coments{
    @PrimaryGeneratedColumn()
    coment_id: number;

    @Column({length:25})
    user_name: string;

    @Column({length:100})
    content: string;

    @Column()
    like: number;

    @ManyToOne(
        (type)=>Guest_Books,
        (guest_books)=>guest_books.guest_comments,
        {nullable: false}
    )
    guest_books: Guest_Books
}
