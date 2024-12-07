import { Issue, Prisma } from "../../../prisma/deploy-output";
import { IssuesRepository } from "../../repositories/IssuesRepository";

export class CreateIssueUseCase{
    constructor(private IssueRepo:IssuesRepository){}
    async execute(data:Prisma.IssueCreateInput):Promise<Issue>{
        return await this.IssueRepo.create(data)
    }
}