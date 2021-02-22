import { Entity, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity("Users")
export class Users{

    @Column({
        primary : true,
        length: 35
    })
    user_email: string;

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
    // static findByName(id: number, pw: string) {
    //     return this.createQueryBuilder("User")
    //         .where("User.id = :id", { id })
    //         .andWhere("User.pw = :pw", { pw })
    //         .getMany();
    // }
}
