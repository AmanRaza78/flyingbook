import { z } from "zod";

export const PlaneFilterSchema = z.object({
  engineType: z.string().optional(),
  planeModal: z.string().optional(),
  capacity: z.string().optional(),
});

export type PlaneFilterType = z.infer<typeof PlaneFilterSchema>;
