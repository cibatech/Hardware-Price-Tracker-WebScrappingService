import { randomUUID } from "crypto";
import { Issue, Prisma } from "../../../prisma/deploy-output";
import { IssuesRepository } from "../IssuesRepository";


export class InMemoryIssuesRepository implements IssuesRepository {
  private issues: Issue[] = [];

  async create(data: Prisma.IssueCreateInput): Promise<Issue> {
    const newIssue: Issue = {
        Id:randomUUID(),
        Reason:String(data.Reason),
        At:String(data.At),
        When:new Date()
    };
    this.issues.push(newIssue);
    return newIssue;
  }

  async findById(id: string): Promise<Issue | null> {
    const p =this.issues.find(issue => issue.Id == id)
    return p?p:null;
  }

  async findByDate(date: Date): Promise<Issue[]> {
    const targetDate = date.toISOString().split("T")[0]; // Comparar apenas a data
    return this.issues.filter(
      issue => issue.When.toISOString().split("T")[0] === targetDate
    );
  }

  async findByAt(at: string): Promise<Issue[]> {
    return this.issues.filter(issue => issue.At === at);
  }
}
