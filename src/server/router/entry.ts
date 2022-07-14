/* eslint-disable */
import { createRouter } from './context';
import { z } from 'zod';

export const entryRouter = createRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.entry.findMany();
    },
  })
  .mutation('createEntry', {
    input: z.object({
      brewMethod: z.string(),
      coffeeIn: z.number(),
      coffeeOut: z.number(),
      brewTime: z.number(),
      result: z.string(),
    }),
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
