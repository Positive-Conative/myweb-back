import {EntityRepository, Repository, getRepository} from "typeorm";
import {Board_Groups} from "../../entity/Board_Groups";
import { boardGroupDto } from "../../../interface/boardGroupDto";

@EntityRepository(Board_Groups)
export class boardGroupRepo extends Repository<Board_Groups> {
       
    findAll() {
        return getRepository(Board_Groups).find();
        // return getRepository(Board_Groups)
        //     .createQueryBuilder("bg")
        //     .getMany();
    }

    insertGroup(bodyData:boardGroupDto) {
        return getRepository(Board_Groups).save(bodyData)
        // return getRepository(Board_Groups)
        //     .createQueryBuilder()
        //     .insert()
        //     .into(Board_Groups)
        //     .values(bodyData)
        //     .execute()
    }

    modifyGroup(bodyData:boardGroupDto) {
        return getRepository(Board_Groups)
            .createQueryBuilder()
            .update(Board_Groups)
            .set(bodyData)
            .where("group_id = :gid", {gid: bodyData.group_id})
            .execute()
    }

    removeGroup(group_id:number) {
        return getRepository(Board_Groups).delete(group_id)
        // return getRepository(Board_Groups)
        //     .createQueryBuilder()
        //     .delete()
        //     .from(Board_Groups)
        //     .where("group_id = :gid", {gid: group_id})
        //     .execute()
    }
}