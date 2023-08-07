import { Body, Controller, Post } from '@nestjs/common';
import { SyncService } from './sync.service';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SyncDto } from './sync.dto';

@Controller('sync')
export class SyncController {
  constructor(private readonly syncService: SyncService) {}

  @ApiOperation({ summary: 'Save the files to a category' })
  @ApiResponse({ status: 201, description: 'File synced successfully!' })
  @ApiBody({
    type: SyncDto,
  })
  @Post()
  async syncData(
    @Body()
    data: {
      contentCategory: string;
      fileName: string;
      fileContent: Blob;
    },
  ): Promise<string> {
    const { contentCategory, fileName, fileContent } = data;
    await this.syncService.saveFileData(contentCategory, fileName, fileContent);
    return `File '${fileName}' in category '${contentCategory}' synced successfully!`;
  }
}
