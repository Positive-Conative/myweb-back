import {EntityRepository, Repository} from "typeorm";
import {Guest_Books} from "../entity/GuestBooks";

@EntityRepository(Guest_Books)
export class guestBooksRepo extends Repository<Guest_Books> {

    findAll(){
        return this
        .createQueryBuilder("guest_books")
        .leftJoinAndSelect('guest_books.user', 'u')
        .getOne();
    }


    findById(guest_id: number) {
        return this //connection
            .createQueryBuilder("guest_books")
            .leftJoinAndSelect('guest_books.user', 'u')
            .where("guest_books.guest_id = :guest_id", { guest_id })
            .getOneOrFail();
    }


}