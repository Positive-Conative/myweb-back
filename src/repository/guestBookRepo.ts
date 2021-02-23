import {EntityRepository, Repository} from "typeorm";
import {Guest_Books} from "../entity/GuestBooks";

@EntityRepository(Guest_Books)
export class guestBooksRepo extends Repository<Guest_Books> {
    findById(guest_id: number) {
        return this //connection
            .createQueryBuilder("guest_books")
            .where("guest_books.guest_id = :guest_id", { guest_id })
            .leftJoinAndSelect('guest_books.user', 'user')
            .getMany();
    }
}