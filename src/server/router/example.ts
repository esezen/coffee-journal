/* eslint-disable */
import { createRouter } from './context';

export const exampleRouter = createRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.entry.findMany();
    },
  });
