/* eslint-disable */
import { TRPCError } from '@trpc/server';
import { createRouter } from './context';
import { z } from 'zod';
import bcrypt from 'bcrypt';

export const authRouter = createRouter()
  .query('getSession', {
    resolve({ ctx }) {
      return ctx.session;
    },
  })
  .mutation('createUser', {
    input: z.object({
      email: z.string(),
      password: z.string(),
    }),
    async resolve({ ctx, input }) {
      const hash = await bcrypt.hash( input.password, 10);

      await ctx.prisma.user.create({
        data: {
          email: input.email,
          password: hash,
        }
      });
    },
  })
  .middleware(async ({ ctx, next }) => {
    // Any queries or mutations after this middleware will
    // raise an error unless there is a current session
    if (!ctx.session) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    return next();
  })
  .query('getSecretMessage', {
    async resolve({ ctx }) {
      return 'You are logged in and can see this secret message!';
    },
  });
