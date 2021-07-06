import { ApiProperty } from '@nestjs/swagger';
import { Dance } from '../interfaces/dance.interface';

export class DanceDto implements Dance {
  @ApiProperty({ required: false })
  id?: string;
  @ApiProperty()
  name: string;
}
