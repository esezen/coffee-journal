/* eslint-disable */
import { createRouter } from './context';
import { entry } from '../../sharedTypes';

export const entryRouter = createRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.entry.findMany();
    },
  })
  .mutation('createEntry', {
    input: entry,
    async resolve({ ctx, input }) {
      await ctx.prisma.entry.create({
        data: {
          brewMethod: input.brewMethod,
          coffeeIn: input.coffeeIn,
          coffeeOut: input.coffeeOut,
          brewTime: input.brewTime,
          result: input.result,
        }
      });
    },
  });
