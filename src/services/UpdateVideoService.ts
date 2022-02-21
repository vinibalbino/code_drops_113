import { getRepository} from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";


type VideoUpdateCategory = {
  id: string;
  name: string;
  description: string;
  duration: number;
  category_id: string;
}


export class UpdateVideoService{
  async execute({id, name, description, duration, category_id}: VideoUpdateCategory){
    const repo = getRepository(Video);

    const video = await repo.findOne(id);

    const repoCategory = getRepository(Category);

    if(!(await repoCategory.findOne(category_id))){
      return new Error("Category doesn't exists!");
    }
    if(!video){
      return new Error("Video doesn't exists!");
    }

    video.name = name ? name : video.name;
    video.description = description ? description : video.description;
    video.category_id = category_id ? category_id : video.category_id;
    video.duration = duration ? duration :  video.duration;

    await repo.save(video);

    return video;
  }
}