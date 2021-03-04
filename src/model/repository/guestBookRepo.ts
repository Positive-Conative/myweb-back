import {EntityRepository, Repository} from "typeorm";
import {Guest_Books} from "../entity/GuestBooks";

@EntityRepository(Guest_Books)
export class guestBooksRepo extends Repository<Guest_Books> {

    findAll(){
        return this
            .createQueryBuilder("gb")
            .leftJoinAndSelect('gb.user', 'u')
            .select([
                'gb.guest_id',
                'gb.title',
                'u.name'
            ])
            .getMany();
    }


    findById(guest_id: number) {
        return this //connection
            .createQueryBuilder("gb")
            .leftJoinAndSelect('gb.user', 'u')
            .where("gb.guest_id = :guest_id", { guest_id })
            // .getOne()
            .getOneOrFail();
    }

}