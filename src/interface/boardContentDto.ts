import { Board_Groups } from "../model/entity/Board_Groups";
import { Users } from "../model/entity/Users";

export interface boardContentDto{
    content_id?: number;
    title: string;
    content: string;
    file_src?: string;
    image_src?: string;
    user: object;
    board_groups: object;
}