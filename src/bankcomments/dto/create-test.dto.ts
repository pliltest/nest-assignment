import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateTestDto {

  @IsNotEmpty()
  name: string;
  
  @IsNotEmpty()
  mobile:string;
  
  @IsNotEmpty()
  email:string;
}