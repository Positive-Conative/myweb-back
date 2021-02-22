import {EntityRepository, Repository} from "typeorm";
import {Board} from "../entity/Board";

@EntityRepository(Board)
export class boardRepo extends Repository<Board> {
       
    findByName(firstName: string, lastName: string) {
        return this.createQueryBuilder("board")
            .where("board.firstName = :firstName", { firstName })
            .andWhere("board.lastName = :lastName", { lastName })
            .getMany();
    }

}