import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SyncData } from '../interfaces/sync-data.model';

@Injectable()
export class SyncService {
  constructor(
    @InjectModel('SyncData') private readonly syncDataModel: Model<SyncData>,
  ) {}

  async saveFileData(
    contentCategory: string,
    fileName: string,
    fileContent: Blob,
  ): Promise<SyncData> {
    try {
      const newSyncData = new this.syncDataModel({
        contentCategory,
        fileName,
        fileContent,
      });

      return newSyncData.save();
    } catch (error) {
      throw error;
    }
  }
}
