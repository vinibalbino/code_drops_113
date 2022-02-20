import { getRepository } from "typeorm";
import { Category } from "../entities/Category";



export class DeleteCategoryService{
  async execute(id: string){
    const repo = getRepository(Category);

    if(!(await repo.findOne({id}))){
      return new Error("Category doesn't exist!")
    };

    await repo.delete(id);

  }
}