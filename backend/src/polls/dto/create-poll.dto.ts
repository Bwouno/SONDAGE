import { IsString, IsBoolean, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreatePollDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsArray()
  @ArrayNotEmpty()
  options: string[];

  @IsBoolean()
  singleChoice: boolean;
}
