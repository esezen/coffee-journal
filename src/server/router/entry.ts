/* eslint-disable */
import { createRouter } from './context';
import { entry } from '../../sharedTypes';

export const entryRouter = createRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      if (ctx.session?.id) {
        return await ctx.prisma.entry.findMany({ where: { userId: ctx.session.id as string }});
      }
    },
  })
  .mutation('createEntry', {
    input: entry,
    async resolve({ ctx, input }) {
      await ctx.prisma.entry.create({
        data: {
          brewMethod: input.brewMethod,
          coffeeName: input.coffeeName,
          coffeeIn: input.coffeeIn,
          coffeeOut: input.coffeeOut,
          brewTime: input.brewTime,
          result: input.result,
          userId: input.userId,
        }
      });
    },
  });
