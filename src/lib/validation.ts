import { z } from "zod";

export const PlaneFilterSchema = z.object({
  engineType: z.string().optional(),
  planeModel: z.string().optional(),
  capacity: z.string().optional(),
});

export type PlaneFilterType = z.infer<typeof PlaneFilterSchema>;
