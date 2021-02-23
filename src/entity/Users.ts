import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany} from "typeorm";
import { Guest_Books } from "./GuestBooks";

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
        (type)=>Guest_Books,
        (guest_books)=>guest_books.user
    )
    guest_books!:Guest_Books[];

    // static findByName(id: number, pw: string) {
    //     return this.createQueryBuilder("User")
    //         .where("User.id = :id", { id })
    //         .andWhere("User.pw = :pw", { pw })
    //         .getMany();
    // }
}
