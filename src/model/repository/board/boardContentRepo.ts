import {EntityRepository, Repository, getRepository} from "typeorm";
import { boardContentDto } from "../../../interface/boardContentDto";
import { Board_Contents } from "../../entity/Board_Contents";

@EntityRepository(Board_Contents)
export class boardContentRepo extends Repository<Board_Contents> {

    insertContent(bodyData:boardContentDto) {
        return getRepository(Board_Contents).save(bodyData)
        // return getRepository(Board_Contents)
        //     .createQueryBuilder("bc")
        //     .insert()
        //     .into(Board_Contents)
        //     .values(bodyData)
        //     .execute()
    }
    findAll() {
        return getRepository(Board_Contents).find();
        // return getRepository(Board_Groups)
        //     .createQueryBuilder("bg")
        //     .getMany();
    }
}