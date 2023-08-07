import { ApiProperty } from '@nestjs/swagger';

export class SyncDto {
  @ApiProperty()
  contentCategory: string;

  @ApiProperty()
  fileName: string;

  // Since fileContent is binary data, we'll use 'string' as the type
  // for the request, but in the service, we can handle it as binary data.
  @ApiProperty()
  fileContent: string;
}
