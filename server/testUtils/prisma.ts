import { prisma } from "../utils/prisma";

const prismaAsAny = prisma as any;

export { prismaAsAny };
