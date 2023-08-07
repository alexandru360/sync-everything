import { Schema, model } from 'mongoose';

export interface SyncData {
  contentCategory: string;
  fileName: string;
  fileContent: Buffer;
}

export const syncDataSchema = new Schema<SyncData>({
  contentCategory: { type: String, required: true },
  fileName: { type: String, required: true },
  fileContent: { type: Buffer, required: true },
});

export const SyncDataModel = model<SyncData>('SyncData', syncDataSchema);
