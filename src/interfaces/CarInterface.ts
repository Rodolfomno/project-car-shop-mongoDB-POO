import { z as zod } from 'zod';
import { VehicleSchema } from './VehicleInterface';

export const CarSchema = VehicleSchema.extend({
  doorsQty: zod.number().min(2).max(4),
  seatsQty: zod.number().min(2).max(7),
});

export type Car = zod.infer<typeof CarSchema>;