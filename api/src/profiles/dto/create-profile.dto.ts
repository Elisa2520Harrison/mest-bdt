import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum } from 'class-validator';

export class CreateProfileDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsEnum(['Admin', 'Moderator', 'User'])
  @ApiProperty({ enum: ['Admin', 'Moderator', 'User'] })
  role: string;
}
