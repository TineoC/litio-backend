import { IsBoolean, IsOptional } from '@nestjs/class-validator';
import { Transform } from 'class-transformer';

export class UpdateCompanyDto {
  name?: string;
  image?: string;
  description?: string;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  status?: boolean;
}
