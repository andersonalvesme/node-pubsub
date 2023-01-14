import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { EnumCategory } from '../../_shared/enums/EnumCategory';

export class NotificationDto {
    @IsNotEmpty()
    @IsNumber()
    category: EnumCategory;

    @IsNotEmpty()
    @IsString()
    message: string;
}
