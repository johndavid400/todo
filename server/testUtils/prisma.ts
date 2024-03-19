import { prisma } from "../utils/prisma";

const prismaMock = prisma as any;

export { prismaMock };
