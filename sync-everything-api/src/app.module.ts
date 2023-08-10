import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { SyncController } from './sync/sync.controller';
import { AuthService } from './auth/auth.service';
import { SyncService } from './sync/sync.service';
import { MongooseModule } from '@nestjs/mongoose';
import { syncDataSchema } from './interfaces/sync-data.model';
import { databaseProvider } from './database.providers';
import { mongoDbConnectionString } from './constants';

@Module({
  imports: [
    MongooseModule.forRoot(mongoDbConnectionString),
    MongooseModule.forFeature([
      { name: 'SyncData', schema: syncDataSchema },
      { name: 'SyncData', schema: syncDataSchema },
    ]),
  ],
  controllers: [AppController, AuthController, SyncController],
  providers: [AppService, AuthService, SyncService, ...databaseProvider],
})
export class AppModule {}
