import * as mongoose from 'mongoose';
import { mongoDbConnectionString } from './constants';

export const databaseProvider = [
  {
    provide: 'DatabaseConnection',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(mongoDbConnectionString),
  },
];
