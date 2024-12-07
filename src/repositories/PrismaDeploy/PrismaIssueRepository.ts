
import { Issue, Prisma, PrismaClient } from "../../../prisma/deploy-output";
import { prisma_deploy } from "../../lib/prisma";
import { IssuesRepository } from "../IssuesRepository";

export class PrismaIssuesRepository implements IssuesRepository {
  async create(data: Prisma.IssueCreateInput): Promise<Issue> {
    return prisma_deploy.issue.create({ data });
  }

  async findById(id: string): Promise<Issue | null> {
    return prisma_deploy.issue.findUnique({
      where: { Id:id },
    });
  }

  async findByDate(date: Date): Promise<Issue[]> {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    return prisma_deploy.issue.findMany({
      where: {
        When: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });
  }

  async findByAt(at: string): Promise<Issue[]> {
    return prisma_deploy.issue.findMany({
      where: { At:at },
    });
  }
}
