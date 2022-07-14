/* eslint-disable import/prefer-default-export */
import { z } from 'zod';

export const entry = z.object({
  brewMethod: z.string().min(3),
  coffeeName: z.string().min(3),
  coffeeIn: z.number().min(1),
  coffeeOut: z.number().min(1),
  brewTime: z.number().min(1),
  result: z.string().min(3),
  userId: z.string(),
});
