import { ApiProperty } from '@nestjs/swagger';

export class CreateCityDto {
  @ApiProperty({ type: String, description: 'The name of the city' })
  name: string;

  @ApiProperty({ type: String, description: 'A description of the city' })
  description: string;

  @ApiProperty({ type: Boolean, description: 'Whether the city is active' })
  active: boolean;
}
