import {EntityRepository, Repository} from "typeorm";
import {Board_Groups} from "../entity/Board_Groups";
import { boardGroupDto } from "../../interface/boardGroupDto";

@EntityRepository(Board_Groups)
export class boardGroupRepo extends Repository<Board_Groups> {
       
    findAll() {
        return this
            .createQueryBuilder("bg")
            .getMany();
    }

    saveGroup(bodyData:boardGroupDto) {
        return this
            .createQueryBuilder()
            .insert()
            .into(Board_Groups)
            .values(bodyData)
            .execute()
    }
}