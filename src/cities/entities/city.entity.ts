import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cities' })
export class City {
  @ApiProperty({ type: Number })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ type: String })
  @Column({ unique: true })
  name: string;

  @ApiProperty({ type: String })
  @Column({ type: 'text', nullable: true })
  description: string;

  @ApiProperty({ type: Boolean })
  @Column({ type: 'boolean', default: true })
  active: boolean;
}
