import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, ManyToOne} from "typeorm";
import { Users } from "./Users";

@Entity("Guest_Books")
export class Guest_Books{
    @PrimaryGeneratedColumn()
    guest_id: number;

    @Column({length:25})
    user_name: string;

    @Column({length:30})
    title: string;

    @Column({length:25, nullable: true})
    content: string;

    @ManyToOne(
        (type)=>Users,
        (users)=>users.guest_books,
        {nullable:false}
    )
    user: Users
}
