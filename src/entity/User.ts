import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pw: string;

    @Column({nullable: true})
    notice?: string;

    // static findByName(id: number, pw: string) {
    //     return this.createQueryBuilder("User")
    //         .where("User.id = :id", { id })
    //         .andWhere("User.pw = :pw", { pw })
    //         .getMany();
    // }
}
